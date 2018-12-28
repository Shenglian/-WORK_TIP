> get 簡單
```golang
func httpGet() {
 resp. err := http.Get("url", strings.NewReader("name=cjb"))
 if err != nil {
  // handler error
 }

 defer resp.Body.Colse()

 body, err := ioutil.ReadAll(resp.Body)
 if err != nil {
  // handler error
 }

 fmt.Println(string(body))
}

> get 複雜
​```golang 
func httpGet2() {
 params := url.Values{}
 Url, err := url.Parse("http://baidu.com?fd=sadfs")
 if err != nil {
  panic(err.Error())
 }
}
```