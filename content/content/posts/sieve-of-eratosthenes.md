---
author: Marin
comments: true
date: 2016-01-03 01:57:51+00:00
layout: post
link: http://marinhero.com/sieve-of-eratosthenes/
slug: sieve-of-eratosthenes
title: Sieve of Eratosthenes
wordpress_id: 117
categories:
- Algorithms
- ruby
---

I had a bad experience with the Sieve of Eratosthenes during a college test, I became traumatized by it and tried to avoid it. During this holiday break I decided to face my fears (lol) and successfully implemented it ruby (not very idiomatic but ruby still)

My favorite parts of this algorithm were:

  * The fact that I don't have to iterate the whole sieve! I can do it just for _sqrt(n) _since the factors of any number are always composed by two numbers and one of them is always lower than the _sqrt_ of any given number n.
  * The usage of ruby's inline _if _statements

https://gist.github.com/marinhero/b37340f8e8ae073e79fb
