---
author: Marin
comments: false
date: 2015-01-23 20:59:02+00:00
layout: post
link: http://marinhero.com/an-important-note-about-slices-in-go/
slug: an-important-note-about-slices-in-go
title: An important note about slices in Go
wordpress_id: 78
draft: true
categories:
- Go
- golang
---

I'm new in Go and this seems important so it's better to digest it and point it out.

A slice is not an array. A slice describes a piece of an array.
Its internal structure can be _described_ as the following:

```go
    type sliceHeader struct {
    Length        int
    ZerothElement *byte //the array that we are pointing to has byte type.
    }
```


It's important to note that there is a pointer inside the structure, but what implications can that have?
Let's check the following example:


```go
    func AddOneToEachElement(slice []byte) {
        for i := range slice {
            slice[i]++
        }
    }
    func main() {
        slice := buffer[10:20]
        for i := 0; i < len(slice); i++ {
            slice[i] = byte(i)
        }
        fmt.Println("before", slice)
        AddOneToEachElement(slice)
        fmt.Println("after", slice)
    }
```

Output:
```txt
    before [0 1 2 3 4 5 6 7 8 9]
    after [1 2 3 4 5 6 7 8 9 10]
```

So, the slice is passed as value, that means that the slice that is inside AddOneToEachElement is a copy from the slice in main, right? so will the output after calling that function will be the same? after all it's just a copy isn't it? Yes it's a copy but a copy containing a pointer, that means that even to copy will have access to the original referenced data, that implies the following affirmation: **"The content of a slice can be modified"**
But what happens if I do the following?

```go
    func SubtractOneFromLength(slice []byte) []byte {
        slice = slice[0 : len(slice)-1]
        return slice
    }

    func main() {
        fmt.Println("Before: len(slice) =", len(slice))
        newSlice := SubtractOneFromLength(slice)
        fmt.Println("After:  len(slice) =", len(slice))
        fmt.Println("After:  len(newSlice) =", len(newSlice))
    }
```


The creation of a slice inside the subtraction function implies a new allocation, that means a new place to point, but wait a minute, am I allowed to modify the pointer inside my head structure? well for sure the program will compile and run but the behavior won't be the one that we expect, the output will be:

```txt
    Before: len(slice) = 50
    After:  len(slice) = 50
    After:  len(newSlice) = 49
```




And that means: **"The contents of a slice argument can be modified by a function, but its header cannot."
**
It's important to keep this in mind to be aware of unexpected behaviors while we are working.
If you are an experienced Go programmer you may find this example familiar, it took it from [here](http://blog.golang.org/slices).

Hope it helps anyone in the way that writing this helped me to understand it :)
