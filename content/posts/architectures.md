
+++
title = "x86, x64, ARM? I just want to download my program!"
date = "2020-03-24"
layout = "post"
author = "Marín"
tags = ["Computer Architecture"]
keywords = ["Processor", "Architecture"]
description = "A practical explanation of what the processor architecture means for the end-users"
showFullContent = false
draft = true
+++

More often than not, when I go to a website to download something I find a screen like this:

_Picture of multiple architectures for a download goes here_

And I these questions usually come to my mind: 

- Why don't we just create one binary type so we don't have to decide this?
- Aren't computers supposed to just "speak" in zeros and ones?
- What happens if I download the wrong binary? 
- Which one is the right one?
- What's the difference between each of them?
- Are architectures compatible with each other?

_GLUE PARAGRAPH GOES HERE_

#### Why don't we just create one binary type so we don't have to decide this?

This has been made and it's called a [Fat Binary](). It gets its name from the fact that it's packed with _machine code_ compatible with several architectures. You might be asking yourself, why is this not the standard way to pack Software? in fact, Apple used this approach when they transitioned from their *68K* CPU architecture to *PowerPC* but there are some caveats about this. First caveat comes from the size of the resulting binary, since you are bundling together several binaries you will end up with a much larger program. Another caveat comes from the fact that there are more ways to do this, compiling the code in the machine that will use it is one way and using a virtual machine (I.E. [JVM]()) is another way to achieve *_portability_*.

_Apple Universal Binary Logo Goes Here_