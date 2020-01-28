---
author: Marin
comments: false
date: 2013-10-16 15:09:34+00:00
layout: post
link: http://marinhero.com/violent-python-chapter-1-part-2/
slug: violent-python-chapter-1-part-2
title: 'Violent Python Chapter #1 Part 2'
wordpress_id: 32
categories:
- Code
- Python
---

I've finished the second exercise from Violent Python's Chapter #1 "The cuckoo's egg", it is a password decrypter.
Here's the code:

```python
    #
    # Violent Python Chapter #1
    # The Cuckoo's Egg: a simple password decrypter
    # By: Marin Alcaraz
    #

    import crypt
    import hashlib

    def testPass(cryptPass):
        salt = cryptPass[0:2]
        dictFile = open('dictionary.txt', 'r')
        for word in dictFile.readlines():
            word = word.strip('\n')
            cryptWord = crypt.crypt(word, salt)
            if (cryptWord == cryptPass or hashlib.sha512(word) == cryptPass):
                print "[+] Found Password: " + word + "\n"
                return
        print "[-] Password not found.\n"
        return

    def main():
        passFile = open("passwords.txt", 'r')
        for line in passFile.readlines():
            if ":" in line:
                user = line.split(':')[0]
                cryptPass = line.split(':')[1].strip(' ')
                print "[*] Cracking Password for: user[" + user + "]\n"
                testPass(cryptPass)
        return

    if __name__ == "__main__":
        main()
```
