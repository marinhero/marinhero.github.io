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

```ruby
    def populate_array(n)
      arr = Array.new(n, true)
      arr[0] = false
      arr[1] = false
      arr
    end

    def print_array(a)
      count = 0
      while count < a.length
        puts "#{count} is prime" if a[count]
        count += 1
      end
    end

    def mark_factors(a, count)
      mult = 2
      while count * mult <= a.length
        a[count * mult] = false
        mult += 1
      end
      a
    end

    def sieve(a)
      count = 2
      while count <= Math.sqrt(a.length)
        a = mark_factors(a, count) if a[count]
        count += 1
      end
    end

    def main
      puts 'Give me the limit for your primes'
      n = Integer(gets.chomp)
      a = populate_array(n + 1)
      sieve(a)
      print_array(a)
    end

    main
```
Gist [link](https://gist.github.com/marinhero/b37340f8e8ae073e79fb)
