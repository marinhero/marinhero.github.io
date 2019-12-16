---
author: Marin
comments: true
date: 2013-10-06 18:04:36+00:00
layout: post
link: http://marinhero.com/violent-python-chapter-1/
slug: violent-python-chapter-1
title: 'Violent Python Chapter #1 Part 1'
wordpress_id: 13
categories:
- Code
- Python
---

Violent Python Chapter #1

I'll try to post a some excerpts about the book [Violent Python](https://www.amazon.com/Violent-Python-Cookbook-Penetration-Engineers/dp/1597499579/ref=sr_1_1?ie=UTF8&qid=1523150080&sr=8-1&keywords=violent+python) here.

This posts references the first part of chapter #1.

In chapter one you work on three mini projects:

  * Vulnerability Scanner
  * The Cuckoo's egg
  * Zip file Cracker


The first exercise aims to build a vulnerability scanner. You are supposed to read full of vulnerable program definitions and compare
it against services running in a remote server.

    <code>
    #
    # Violent Python Chapter #1
    # Vuln Scanner
    # By: Marin Alcaraz
    #
    
    import sys
    import os
    import socket
    
    def retBanner(ip, port):
        try:
            socket.setdefaulttimeout(2)
            s = socket.socket()
            s.connect((ip, port))
            banner = s.recv(1024)
            return banner
        except Exception, e:
           return  str(e)
    
    def checkFile(filename):
        try:
            if not os.path.isfile(filename):
                raise Exception("File doesn't exist")
                return -1
            if not os.access(filename, os.R_OK):
                raise Exception("Permission Denied")
            f = open(filename, 'r')
            return f
        except Exception, e:
            print str(e)
            return -1
    
    
    def checkVulns(banner, filename):
        print "[+] Reading Vulnerable Banner list from: " + filename
        f = checkFile(filename)
        for line in f.readlines():
            print "[+] Checking for banner: " + line.strip('\n')
            if line.strip('\n') in banner:
                print "[+] Server is Vulnerable: " + banner.strip('\n')
            else:
                print '[-] FTP Server is not vulnerable'
        return
    
    def main():
        portList = [21, 22, 25, 80, 110, 443]
        if (len(sys.argv) == 2):
            filename = sys.argv[1]
        else:
            filename = "vuln_banners.txt"
        for x in range(1, 255):
            ip = '192.168.95.' + str(x)
            for port in portList:
                banner = retBanner(ip, port)
                if banner:
                    print '[+] ' + ip + ': ' + banner
                    if (checkVulns(banner, filename) == -1):
                        return
    
    
    if __name__ == '__main__':
        main()
    </code>


Notes:

  * Python reserves memory space for variables when programmer declares them. Python interpreter decides the type of the variable. You can get the type of a variable via type() function.
  * The Python dictionary provides a hash table that can store any number of Python objects. It follows the classic key->value method. You can get the available keys via the .keys() function, you are also able to verify the existence of one key with has_key() or see the whole list with items(). Direct access to the elements is provided via data['key'] scheme.
  * The socket module provides a library for making network connections using Python.
  * Python provides exception handling capability with try and except.
  * The keyword def() begins a function, the variables between () are passed by reference meaning that any changes to these variables inside the function will affect their value from the calling function.
  * Python provides an easy way to interact with files through the open() and readlines functions. Full i/o API is of course available at Python's website.
  * The built in sys modules provides access to objects used or maintained by the Python interpreter. Ex: argv.
  * OS module allows Python to communicate with local OS library.
