
+++
title = "Never Lose Another Bash Command Ever Again!"
date = "2020-11-21"
layout = "post"
author = "Marín"
tags = ["bash", "tooling"]
keywords = ["bash", "history"]
showFullContent = false
+++

Every once in awhile, I would find a Bash shell command that gets me out of a big problem. After hours of troubleshooting, I would find THE command, run it, and then I would move on and forget about that command. The next time I faced the same issue, I might remember the command, but if not I would try to get it from my Bash history using the command:`$> history`. I’ve had mixed results with this method because sometimes the command I was looking for was run months ago and it’s long gone from my Bash history.

# The command

To work around that, a fellow [Recurser](https://recurse.com) shared this line of code with me a few years ago:

```bash
export PROMPT_COMMAND='if [ "$(id -u)" -ne 0  ]; then echo "$(date "+%Y-%m-%d.%H:%M:%S") $(pwd) $(history 1)" >> ~/.logs/bash-history-$(date "+%Y-%m-%d").log; fi'
```

- `if [ "$(id -u)" -ne 0  ]`: If you are not the root user run this code.
- `echo "$(date "+%Y-%m-%d.%H:%M:%S") $(pwd) $(history 1)"`: Get today’s date, current work directory and the latest command that was run.
- `>> ~/.logs/bash-history-$(date "+%Y-%m-%d").log;`: Append the result of the command to a file stored in `~/.logs` and is organized by date.

What I like the most about this is that files are organized by date. This makes it easy to search for commands. For example, let’s say that I’m going back to work on a Git repository that I worked on nine months ago. I need to run a command that made my local build pass and nine months ago I found the fix after troubleshooting for an hour. Today I don’t remember that command! All I remember about it is that it had an `“add_missing”` somewhere. With the local logs I just created I can cd into the .logs directory and  run [the silver searcher (ag)](https://github.com/ggreer/the_silver_searcher) like this:

[![asciicast](https://asciinema.org/a/372356.svg)](https://asciinema.org/a/372356)

And boom! I’ll get all the commands that match that pattern and I’m swiftly back on track to my work. Useful, right?

# Installation

If you want to use this on your computer all you need to do are these two things:

- `$> mkdir ~/.logs`
- Copy and paste the line of code from above onto your ~/.bashrc and restart your shell session so the new command starts to run.

# Conclusion

I hope you get as much value out of this one-liner as I have, before you go ahead and install it you should consider some of the downsides I see in this approach:

- Can be redundant: Bash history exists and you can do ctrl-r on it. If you set a pretty big history size you might not need this.
- Commands are stored in plain text: someone could just steal these files and learn a lot about the way I use my computer.
- It’s not synced amongst multiple devices: a distributed and portable version of this would be great! Sometimes the commands I run in one machine will be needed in another and this one-liner won’t fix that.

All things considered, this command brings more value to me that it outweighs its cons so I’ll continue to use it and promote it.

If you have any questions, observations, or want to share a cool hack using this command reach out to me via [Twitter](https://twitter.com/marinftw).

Cheers!

Special thanks to [Raymond Sohn](https://hachibu.net) for help editing.
