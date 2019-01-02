> Interface
>
> >  interface{} 任意值
> >
> > interface 介面定義

# Interface{} 是任意值

在 Golang 裏有兩種 Interface，一種是型態，另一種是定義，有些時候你可能會看見像下面這樣的 Interface。

```go
func Hello(value interface{}) {  
}
```

在這種時候 `interface{}` 意味著任何型態的值，意思是你可以傳入 `int`、`string` 或者是建構體都行，這令你在設計程式時擁有足夠的彈性來接收任意型態的值。

## 型態斷言

別以為這樣就結束了，因為你傳入的東西現在成為了 `interface{}` 型態。因此你需要透過型態斷言（Type Assertion）來宣告這個 `interface{}` 的內容真正是什麼型態，如此一來才能夠在其他函式中用上。

```go
func Hello(value interface{}) {  
    // 透過型態斷言揭露 interface{} 真正的型態。
    switch v := value.(type) {
        // 如果 value 是字串型態。
        case string:
            fmt.Println("value 是字串，內容是 " + v)
        // 如果 value 是 int 型態。
        case int:
            fmt.Printf("value 是數值，加上二就是 %d", v + 2)
    }
}
```

## 型態宣告

如果你很確越切地知道這個 `interface{}` 是什麼型態，你不需要大費周章地寫出一個型態斷言，你可以直接透過 `value.(型態)` 來進行型態宣告（Type Casting）並將 `interface{}` 變成指定型態。

倘若該型態不正確，則會出現 `panic` 警告。

```go
func Hello(value interface{}) {  
    fmt.Println("value 是字串，內容是 " + value.(string))
}
```

# Interface 是介面定義

這裡的介面指的不是 GUI 那種可見的畫面，而是指 Interface，中國稱其為「接口」，顧名思義，你會透過 Interface 定義一個接口並讓別人以其實作，聽起來霧矇矇嗎？這裡有個實際例子。

## 實際範例

假設你有個資料庫驅動函式，他支援寫入和讀取資料庫，但你不想把它寫死成僅支援 MySQL，所以你會透過 Interface 定義一個接口，像這樣。

```go
// Database 是一個介面定義，用來讓第三方開發者定義自己的資料庫使用方式，就像一種規範。
type Database interface {  
    // Read 會從資料庫中讀取內容。
    Read()
    // Write 會將內容寫入至資料庫。
    Write()
}
```

這意味著我們現在可以遵循 `Database` 這個介面，開始支援更多的資料庫，像下面這樣。

```go
// MySQL 會實作 Database 介面。
type MySQL struct {}  
func (m MySQL) Read() {}  
func (m MySQL) Write() {}

// MongoDB 會實作 Database 介面。
type MongoDB struct {}  
func (m MongoDB) Read() {}  
func (m MongoDB) Write() {}  
```

現在我們只要將 `MySQL` 或 `MongoDB` 傳入 `New()` 函式，然後就會被實作成 `Database`介面，接著就能夠使用 MySQL 或 MongoDB 資料庫進行讀取和寫入了！

```go
// New 會將接收到的物件以 Database 實作，並且呼叫相關函式對資料庫進行操作。
func New(db Database) {  
    // 讀取資料庫。
    db.Read()
    // 寫入資料庫。
    db.Write()
}

// 將建構體傳入 New 就會被實作成 Database。
New(MySQL{})  
New(MongoDB{})  
```

## 實作條件

實作 Interface 的時候有件事情要注意，那就是欲實作的建構體必須要有 Interface 所定義的所有函式、接收參數、回傳值，否則 Golang 會表明無法實作該 Interface 因為缺少某某條件。

```go
type Database interface {  
    Read(string) string
    Write(string)
}
```

這意味著 `Read` 一定要接收一個字串，然後回傳一個字串，而 `Write` 則必須接收一個字串。

有趣的是 Golang 還允許你在定義 Interface 的時候擺上參數名稱用以辨別，但**實作的時候並不需要**遵循這個參數名稱。

```go
type Database interface {  
    Read(name string) string
    Write(data string)
}
```