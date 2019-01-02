> 多種文件讀取方式比較

```go
package main  
  
import (  
	"fmt"  
	"os"  
	"flag"  
	"io"  
	"io/ioutil"  
	"bufio"  
	"time"  
)  
  
func read1(path string){  
	fi,err := os.Open(path)
	if err != nil{  
		panic(err)  
	}  
	defer fi.Close()  
  
	//  chunks := make([]byte,1024,1024)  
	buf := make([]byte,1024)  
	for {  
		n,err := fi.Read(buf)  
        if err != nil && err != io.EOF{panic(err)}  
		if 0 ==n {break}  
		// chunks = append(chunks,buf[:n]...)  
		// fmt.Println(string(buf[:n]))  
	}  
}  
  
func read2(path string){  
	fi,err := os.Open(path)  
	if err != nil{panic(err)}  
	defer fi.Close()  
	r := bufio.NewReader(fi)  
	// chunks := make([]byte,1024,1024)  
	    
	buf := make([]byte,1024)  
	for{  
        n,err := r.Read(buf)  
        if err != nil && err != io.EOF{panic(err)}  
        if 0 ==n {break}  
		// chunks=append(chunks,buf[:n]...)  
	    // fmt.Println(string(buf[:n]))  
	}  
}  
  
func read3(path string){  
	fi,err := os.Open(path)  
	if err != nil{panic(err)}  
	defer fi.Close()  
	_,err = ioutil.ReadAll(fi)  
	// fmt.Println(string(fd))  
}  
  
func main(){  
	flag.Parse()  
	file := flag.Arg(0)  
	start := time.Now()  
	read1(file)  
	t1 := time.Now()  
	fmt.Printf("Cost time %v\n",t1.Sub(start))  
	read2(file)  
	t2 := time.Now()  
	fmt.Printf("Cost time %v\n",t2.Sub(t1))  
	read3(file)  
	t3 := time.Now()  
	fmt.Printf("Cost time %v\n",t3.Sub(t2))  
}  

// bufio > ioutil > file.Read
```



