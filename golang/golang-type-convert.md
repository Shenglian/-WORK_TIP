> Golang string int int64
```go
// string to int 
int, err := strconv.Atoi(string)

// int to string 
string := strconv.Itoa(int)

// string to int64
int64, err := strconv.ParseInt(string, 10, 64)

// int64 to string 
string := strconv.FormatInt(int64, 10)
```

