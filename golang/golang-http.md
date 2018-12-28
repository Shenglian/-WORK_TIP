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

> post 
​```golang
func post() {
    type Server struct {
    	ServerName string
	    ServerIp   string
	}

	type ServerSlice struct {
    	Server    []Server
	    ServersID string
	}

	func main() {
    	// post 第三个参数是io.reader interface
	    // strings.NewReader  byte.NewReader bytes.NewBuffer  实现了read 方法
    	s := ServerSlice{ServersID: "tearm", Server: []Server{{"beijing", "127.0.0.1"}, {"shanghai", "127.0.0.1"}}}
	    b, _ := json.Marshal(s)
         fmt.Println(string(b))
	    resp, _ := http.Post("http://baidu.com", "application/x-www-form-urlencoded", strings.NewReader("heel="+string(b)))
    // defer resp.Body.Close()
    // io.Reader

	    body, _ := ioutil.ReadAll(resp.Body)
    	fmt.Println(string(body))
}
​```
> post form
​```golang
func postForm() {
    // params := url.Values{}
    // params.Set("a", "abc")
    
    params = url.Values{"key": {"values"}, "id": {"123"}}
    
    resp, _ := http.PostForm("http://baidu.com", params)
    
    defer resp.Body.Close()
    body, _ := ioutil.ReadAll(resp.Body)
    
    fmt.Println(string(body))
}
​```
​```golang
> set Header params
func setHeader() {
    client := &http.Client()
    
    req, err := http.NewRequest("POST", "baidu.com", strings.NewReader("name=cjb"))
    if err != nil {
        // handler error
    }
    
    req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
    req.Header.Set("Cookie", "name=sheng")
    
    resp, err := client.Do(req)
    
    defer resp.Body.Close()
    
    body, err := ioutil.ReadAll(resp.Body)
   	if err != nil {
        // handle error
   	}
    
    fmt.Println(string(body))
}
​```
```