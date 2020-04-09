
+++
title = "x86, x64, ARM? I Just Want to Download my Program!"
date = "2020-04-21"
layout = "post"
author = "Marín"
tags = ["Computer Architecture"]
keywords = ["Processor", "Architecture"]
showFullContent = false
+++

More often than not, when I go to a website to download a program I find a screen like this.

![Downloads](https://i.imgur.com/Ufm7b20.png)

These are some of the questions that come to my mind.

- Why are there so many options?
- Why don't we just create one universal binary format so we don't have to decide this?
- Aren't computers supposed to just **speak** in zeroes and ones?
- What happens if I download the wrong binary?
- Are architectures compatible with each other?

I usually know the architecture of the CPU my computer is running, so the decision-making process is straightforward, but I don’t really know the real reason behind picking one binary over another. I decided to clear that doubt from my mind, and hopefully, these answers will clarify the questions for you too.

If you don’t know the architecture of your CPU don’t worry, you can find that out by running the command `lscpu` in Linux, `uname -a` in Mac OS or `wmic cpu get caption` on Windows. 

![Uname](https://i.imgur.com/sB0941K.png)


# Why Are There So Many Options?

Binaries are compiled targeting a specific CPU architecture. Different CPUs have different instruction sets. This means that under the hood the code that forms the binary is expected to be interpreted by a specific instruction set. When downloading a program we need to choose the binary that's right for our CPU architecture.

# Why Don't We Just Create One Universal Binary Format?

This has been made and it's called a [Fat Binary](https://en.wikipedia.org/wiki/Fat_binary). It gets its name from the fact that it's packed with machine code compatible with several architectures. You might be asking yourself, why is this not the standard way to pack Software? In fact, Apple used this approach when they transitioned from their 68K CPU architecture to PowerPC but there are some caveats about this.

One caveat comes from the size of the resulting binary since you are bundling together several binaries you will end up with a much larger program. 
Another caveat comes from the fact that there are more ways to do this, compiling the code in the machine that will use it is one way and using a virtual machine (e.g [JVM](https://en.wikipedia.org/wiki/Java_virtual_machine)) is another way to achieve [software portability](https://en.wikipedia.org/wiki/Software_portability).

This question was actually asked on Stack Exchange the explanations in [there](https://softwareengineering.stackexchange.com/questions/274846/why-arent-fat-binaries-more-widely-used-for-cross-platform-applications) go into further detail. I definitely recommend giving it a look

# Aren't Computers Supposed to Just Speak in Ones and Zeroes?

Yes they do, but recently this analogy was shared to me by a fellow member of the [Recurse Center](https://recurse.com) and it changed the way I think about this question:

> "Why can't all English speakers read Chinese? Doesn't it all become ink on a page at the end?”

And this is true! But we don't care about the ink now do we? We care about the language, the structure of a sentence, and the meaning it carries.
Processors are just the same, on one architecture a block of ones and zeroes might mean multiply, but on another, it might mean subtract.

Here are a couple of instruction sets, you can see how the instruction sets vary from one to the other. See how the statement above becomes true, the instruction sets operate with zeroes and ones but they definitely speak a different language. As a fun exercise, try to find similar operations on one diagram or the other.

![Diagram1](https://i.imgur.com/zsZG5mF.png)

![Diagram2](https://i.imgur.com/l2zDbf7.png)


# What Happens if I Download The Wrong Binary?

The fear of an exploding computer is something that will never disappear from some of us, right? Will the wrong binary finally set my computer in flames? I’m sorry to disappoint you but no, when you download the wrong binary and try to run it you’ll be met with a meaningful error message. Much more boring than expected but also useful.

![Wrong](https://i.imgur.com/ClB5QQX.png)

 
# Are Architectures Compatible With Each Other?

Some of them are! If your architecture happens to be a superset of another then your binaries will run. For example, x86-64 was designed to be a superset of x86, so programs compiled for x86 are still able to run on it. In many cases, It’s important to keep this type of compatibility so users and developers can benefit from it and still use the binaries that were compiled with an older architecture in mind.
Conclusion

I got my questions answered and also gained a more concrete understanding of what computer architecture is. Knowing the implications of choosing an architecture over another brings a new perspective on topics like buying a new computing device (e.g. a Surface Tablet -- ARM vs a Surface Laptop -- AMD64), choosing which operating system version to install on your freshly built PC, or simply which version of a program you want to download!

Special thanks to [Raymond Sohn](https://hachibu.net) and the [Recurse Center](https://recurse.com) community for their contributions to this post.
