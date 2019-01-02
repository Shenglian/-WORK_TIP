*If you’re interested in Go, be sure to check out Go by Example.*

[Go](http://golang.org/) is a general-purpose language for building simple, reliable, and fast software. It’s fun to write and a good fit for many use cases including web apps, network services, and command-line tools.

This quickstart will show you how to run Go apps and deploy them to the [Heroku](http://www.heroku.com/) cloud platform.

We’ll start with installing Go and running a hello world program. Then we’ll set up a Go environment, build a Go web app, and deploy that app to Heroku.

### Go Install

To install Go, visit the [official downloads page](http://code.google.com/p/go/downloads/list) and follow the link for your OS.

To test your install, open a new terminal window and try the `go` command:

```
$ go version
go version go1.1.2
```

Now let’s write our first Go program.

### Hello World

Here’s our hello world program. Put the code in `hello.go`:

```
package main

import "fmt"

func main() {
    fmt.Println("hello, world")
}
```

And try it with `go run`:

```
$ go run hello.go
hello, world
```

Using `go run` is great for running small test programs. To pre-compile Go apps you’ll want to setup a proper Go environment. We’ll look at that next.

### Go Environment

Go tools expect your code to be arranged according to Go conventions. Following these conventions makes Go easier to use. The full details are on [golang.org](http://golang.org/doc/code.html), but here’s the quick version.

Make a directory for your Go code:

```
$ mkdir -p $HOME/go/src
```

Tell the Go tools where this is with a `GOPATH` environment variable sourced in your `.bash_profile` (or `.bash_login`, etc.):

```
$ echo 'export GOPATH=$HOME/go' >> $HOME/.bash_profile
$ echo 'export PATH=$PATH:$GOPATH/bin'  >> $HOME/.bash_profile
```

Now open a new terminal window and try:

```
$ echo $GOPATH
/Users/you/go
```

If you see something `echo`‘d for `$GOPATH` like above then you’re all set.

With this in place let’s try building a Go web app.

### Go Web App

Our Go web app will be an HTTP version of the hello world we saw above. Start by creating a directory for your app:

```
$ mkdir $GOPATH/src/demoapp
$ cd $GOPATH/src/demoapp
```

Here is the code for the app. Put it in `web.go`:

```
package main

import (
    "fmt"
    "net/http"
    "os"
)

func main() {
    http.HandleFunc("/", hello)
    fmt.Println("listening...")
    err := http.ListenAndServe(":"+os.Getenv("PORT"), nil)
    if err != nil {
      panic(err)
    }
}

func hello(res http.ResponseWriter, req *http.Request) {
    fmt.Fprintln(res, "hello, world")
}
```

Build this code into an executable binary with `go get`:

```
$ go get
```

Check for the new binary with `which`:

```
$ which demoapp
/Users/you/go/bin/demoap
```

Now try running the program:

```
$ PORT=5000 demoapp
listening...
```

And making an HTTP request to it:

```
$ curl -i http://127.0.0.1:5000/
HTTP/1.1 200 OK
Date: Sat, 22 Sep 2012 15:30:33 GMT
Transfer-Encoding: chunked
Content-Type: text/plain; charset=utf-8

hello, world
```

Great, it worked! Now let’s try deploying this app to Heroku so that we can see it running live.

### Heroku Setup

In order to deploy to Heroku you’ll need a Heroku user account. [Signup is free and instant](https://api.heroku.com/signup).

You’ll also need a Heroku command-line client. Get it by installing the [Heroku Toolbelt](https://toolbelt.heroku.com/) if you haven’t already.

If this is your first time using Heroku, login and upload your SSH key:

```
$ heroku login
Enter your Heroku credentials.
Email: you@example.com
Password:
Uploading ssh public key /Users/you/.ssh/id_rsa.pub
```

With that in place, let’s prepare our app for deploying to Heroku.

### Git, Procfile, and Godep

In order to deploy to Heroku we’ll need the app stored in Git:

```
$ git init
$ git add -A .
$ git commit -m code
```

We’ll also need a `Procfile` to tell Heroku what command to run for the `web` process in our app:

```
$ echo 'web: demoapp' > Procfile
```

The recommended way to manage Go package dependencies on Heroku is with [Godep](https://github.com/kr/godep), which helps build applications reproducibly.

Install Godep:

```
$ go get github.com/kr/godep
```

Now save your dependencies:

```
$ godep save 
```

This will save a list of dependencies to the file `Godeps/Godeps.json` and copy their source code into `Godeps/_workspace`.

Add these new files to git:

```
$ git add -A .
$ git commit -m dependencies
```

Now we’re ready to ship this to Heroku.

### Heroku Deploy

Create a new Heroku app, telling it to use the [Go Heroku Buildpack](https://github.com/kr/heroku-buildpack-go.git) to build your Go code:

```
$ heroku create -b https://github.com/kr/heroku-buildpack-go.git
Creating ancient-temple-243... done, stack is cedar
Git remote heroku added
```

Push the code to Heroku:

```
$ git push heroku master
-----> Fetching custom git buildpack... done
-----> Go app detected
-----> Installing go1.1.2... done
-----> Running: godep go install -tags heroku ./...
-----> Discovering process types
       Procfile declares types -> web

-----> Compressing... done, 1.2MB
-----> Launching... done, v4
       http://ancient-temple-243.herokuapp.com deployed to Heroku
```

Your app should be up and running. Visit it with:

```
$ heroku open
```

If everything went OK, you should have 1 web process up:

```
$ heroku ps
=== web: `demoapp`
web.1: up 2012/09/22 12:29:08 (~ 1m ago)
```

You can also check your logs to see watch as requests come in:

```
$ heroku logs --tail
heroku[api]: Deploy 75a0292 by you@example.com
heroku[slugc]: Slug compilation finished
heroku[web.1]: Starting process with command `demoapp`
app[web.1]: listening...
heroku[web.1]: State changed from starting to up
heroku[router]: GET ancient-temple-243.herokuapp.com/ ...
```

That’s it - you now have a running Go app on Heroku!

[Source from](http://mmcgrana.github.io/2012/09/getting-started-with-go-on-heroku.html)