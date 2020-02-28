---
author: Marin
comments: true
date: 2014-01-18 04:32:25+00:00
layout: post
link: http://marinhero.com/connect-to-airport-extreme-shared-disk-from-linux/
slug: connect-to-airport-extreme-shared-disk-from-linux
title: Connect to Airport Extreme Shared Disk from Linux
wordpress_id: 41
draft: true
categories:
- Airport Extreme
- Apple
- Disk Sharing
- Linux
- Networking
- Time Capsule
---

Recently I bought an Apple Airport Extreme to improve WiFi connectivity at home, I'm very happy with the results!

Airport Extreme allows you to share a hard drive over the network, since one of my computers runs Linux I decided to modify my fstab to auto mount the sared drive into the Linux box.

Check it out:


    sudo mkdir /media/airport
    sudo vim /etc/fstab


Add the following information at the end of that file (_in one line_):

    //YOUR.AIPORT.IP.ADDR/YOURAIRPORTWORKDIR
    /media/airport/ cifs auto,
    iocharset=utf8,nobrl,username=AirportUsername,
    password=AirportPass,
    _netdev,uid=LinuxUser,gid=LinuxGroup

And then auto mount your new fstab entry using:

    marin@Corsair$> sudo mount -a

That's all!
