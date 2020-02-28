---
author: Marin
comments: false
date: 2015-01-21 20:39:20+00:00
layout: post
link: http://marinhero.com/a-client-server-prototype-in-go/
slug: a-client-server-prototype-in-go
title: A Client / Server prototype in Go
wordpress_id: 71
draft: true
categories:
- client / server
- Go
- golang
- Hacker School
- prototype
- tcp
---

I started my batch at [Recurse Center](recurse.com) two weeks ago. One of my goals for the batch is to become proficient in [go](http://golang.org/). To get started I went through ["A tour of Go"](http://tour.golang.org/), after that I decided to work on my first Go project.

The project was a Client / Server conversation, a limited conversation. As a client you are able to connect to an IP:PORT server and send three commands to the server: {1: ls, 2: who, 3: pwd}. As a server you are able to bind a port on your localhost and listen, execute and resolve (return) the requests of the client. The server is able to support multiple clients and request at the same time thanks to [Goroutines](https://gobyexample.com/goroutines).

So, what challenges I've faced during this project? being my first project in go the simple fact to make the program compile was a challenge in the beginning... then I realize I didn't understood the language quite well... in the end this turned to be a fun first experience with go.

Check it out:

```go
    readed := 0
    response := make([]byte, 8)

    for {
        //Read from server
        readed, err = con.Read(response)
        fmt.Print(string(response))
        if readed != len(response) {
        //Read request from keyboard
            fmt.Print("ftp> ")
            _, err = fmt.Scanf("%s", &request)
         if request == "quit" {
             break
         }
         //Send to server
         _, err = con.Write([]byte(request))
         //Valid terminated string
         _, err = con.Write([]byte("\r"))
        }
        if err != nil {
            return fmt.Errorf("Interact error: %s", err)
        }
        response = make([]byte, 8)
    }
```
Cheers!
