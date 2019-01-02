> # Go語言http中間件

## http中間件

Go語言的http的Handler很好寫，下面是一個helloworld例子：

```go
func helloworld(w http.ResponseWriter, r *http.Request) {
    io.Write(w, "hello world!")
}
```

http中間件是指在原來http.Handler的基礎上，包裝一層，得到一個新的Handler。

```go
func GETMethodFilter(h http.Handler) http.Handler {
    return http.HandlerFunc(w http.ResponseWriter, r *http.Request) {
        if r.Method != "GET" {
            http.NotFound(w, r)
            return
        }
        h.ServeHTTP(w, r)
    }
}
```

任何一個函數，如果它可以接受一個http.Handler，並返回一個新的Handler，這個函數就可以算是一個中間件。GETMethodFilter就是一個http中間件，我們可以將它包裝到helloworld上面，得到新的Handler是一個只處理GET方法的helloworld。

```go
GETMethodFilter(helloworld)
```

http中間件最大的好處是無侵入性，只要願意，可以在外面嵌套許許多多層中間件，達到不同的目標。比較可以加上登陸，加上參數合法性校驗，加上訪問權限過濾，等等等。

## 串聯嘗試

上面寫過一個GETMethodFilter的例子，那麼如果我們要過濾掉的是POST方法呢？重複代碼是不好的事情。我們可以寫一個MethodFilter，接受參數GET或者POST來決定是返回GETMethodFilter或者POSTMethodFilter。

```go
func MethodFilter(method string, h http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        if r.Method != method {
            http.NotFound(w, r)
            return
        }
        h.ServeHTTP(w, r)
    })
}
```

這種寫法有缺陷，多了一個參數，它就不是我們之前的中間件形式了，這種不一致這會導致後面寫串聯函數不方便。我們將只能這樣寫：

```go
ParamFilter("some argument", MethodFilter("GET", helloworld))
```

而無法寫成：

```go
New(helloworld).Then(ParamFilter).Then(MethodFilter)
```

因為不同的方法需要不同的參數。

## 串聯

Go語言中推崇組合。為了真正實現串聯，必須要再往上抽像一層。任何東西只要實現了MiddleWare接口，它就是一個MiddleWare。

```go
type MiddleWare interface {
    Chain(http.Handler) http.Handler
}
```

MiddleWare和MiddlewareFunc的關係，很類似標準庫中Handler跟HandlerFunc的關係。

```go
type MiddlewareFunc func(http.Handler) http.Handler
```

將MethodFilter修改成為一個真正的MiddleWare：

```go
func MethodFilter(method string) MiddleWare {
    return MiddlewareFunc(func(base http.Handler) http.Handler {
        return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
            if r.Method != method {
                http.NotFound(w, r)
            }
            base.ServeHTTP(w, r)
        })
    })
}
```

上面函數式的寫法，如果換成面向對象的寫法，我們可以寫成下面形式：

```go
type MethodFilter struct {
    method string
}
func (m *MethodFilter) Chain(http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        if m.method != method {
            // xxx
        }
        base.ServeHTTP(w, r)
    })
}
```

對像是窮人的閉包？閉包是窮人的對象？who cares。不過在Go語言中，我直覺上認為後一種寫法性能上應該好一點點，說來話長所以不解釋。

用MiddleWare做串聯就很簡單了。比如說：

```go
type Chain struct {
    middlewares []MiddleWare
    raw         http.Handler
}
func New(handler http.Handler, middlewares ...MiddleWare) *Chain {
    return &Chain{
        raw:         handler,
        middlewares: middlewares,
    }
}
func (mc *Chain) Then(m MiddleWare) *Chain {
    mc.middlewares = append(mc.middlewares, m)
    return mc
}
func (mc *MiddleWareChain) ServeHTTP(w http.ResponseWriter, r *http.Request) {
    final := mc.raw
    for _, v := range mc.middlewares {
        final = v.Chain(final)
    }
    final.ServeHTTP(w, r)
}
```

然後這樣子用

```go
New(helloworld).Then(ParamFilter).Then(MethodFilter)
```

## 上下文

如果使用http中間件，必然會遇到的一個問題是上下文中傳遞數據的問題。上下文是指什麼呢？每個中間件會從前面的中間件中獲取數據，並且可能會生成新的數據傳後面的中間件，這些數據傳遞形成的就是上下文。比如我有一個ParamFilter，這個中間件的作用是驗證輸出參數是否合法的。那麼驗證完之後，應該把數據放到上下文中，傳給後面中間件去使用。再比如說，如果我寫了一個Login的中間件，那麼這個中間件可以把session一類的信息就可以放到上下文，後面的中間件就可以從上下文中獲取到session。

[gorilla](https://github.com/gorilla/context)的做法是把上下文信息放到了一個全局map中，使用http.Request作為key就可以將上下文獲取出來。這個方案優點是對標準庫無侵入性。但是也有些缺點，一個是請求結束後還需要清除掉map[r]，另一個是全局map的加鎖會影響性能，這個缺點在很多場景是致命的。

Go語言[官方推薦的做法](http://blog.golang.org/context)是，在每個Handler都加多一個參數context。比如寫一個

```go
type ContextHandler interface {
    ServeHTTP(ctx context.Context, w http.ResponseWriter, r *http.Request)
}
```

官方的補充庫中專門有一個[context.Context接口](https://github.com/golang/net/tree/master/context)。這種方式對標準庫的Handler侵入性比較強，如果有較多遺留代碼，也不算太好一個方案。

使用http中間件，處理上下文是必不可少的。上面都是比較有代表性的方案，但是我都不太滿意。直到突然有一天靈光一閃，發現其實可以利用http.ResponseWriter是interface這點，把上下文隱藏在裡面!

```go
type ContextResponseWriter interface {
    http.ResponseWriter
    Value(interface{}) interface{}
}
```

這樣我們可以寫標準的http.Handler接口，並且在需要的時候又可以取出上下文：

```go
func HelloWorld(w http.ResponseWriter, r *http.Request) {
    if cw, ok := w.(ContextResponseWriter); ok {
        value := cw.Value("key")
        ...
    }
}
```

## 完整例子

```go
package main

import (
    "github.com/tiancaiamao/middleware"
    "io"
    "net/http"
)

type MyContextResponseWriter struct {
    http.ResponseWriter
    key, value interface{}
}

func (w *MyContextResponseWriter) Value(key interface{}) interface{} {
    if w.key == key {
        return w.value
    }
    return nil
}

func HelloWorld(w http.ResponseWriter, r *http.Request) {
    if ctx, ok := w.(middleware.ContextResponseWriter); ok {
        valueFromContext := ctx.Value("xxx")
        io.WriteString(w, "hello, "+valueFromContext.(string))
        return
    }

    io.WriteString(w, "hello world")
}

type MiddleWareDemo struct{}

func (demo MiddleWareDemo) Chain(h http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        cw := &MyContextResponseWriter{
            ResponseWriter: w,
            key:            "xxx",
            value:          "demo",
        }

        h.ServeHTTP(cw, r)
    })
}

func main() {
    handler := middleware.New(http.HandlerFunc(HelloWorld), MiddleWareDemo{})
    http.ListenAndServe(":8080", handler)
}
```

[Source from](http://www.zenlife.tk/go-http-middleware.md)