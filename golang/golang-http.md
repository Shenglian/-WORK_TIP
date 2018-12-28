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
 	
 	params.Set("a", "aaaa")
 	params.Set("b", "bbbb")
 	
 	// urlEncode 中文參數
 	Url.RawQuery = params.Encode()
 	
 	urlPath := Url.String()
 	
 	resp, err := http.Get(urlPath)
 	
 	defer resp.Body.Close()
 	
 	s, err := ioutil.ReadAll(resp.Body)
 	
 	fmt.Println(string(s))
}
​```
```