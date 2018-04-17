---
author: Marin
comments: true
date: 2013-10-17 16:13:00+00:00
layout: post
link: http://marinhero.com/violent-python-chapter-1-final/
slug: violent-python-chapter-1-final
title: 'Violent Python Chapter #1 Final'
wordpress_id: 34
categories:
- Code
- Python
---

And that's all for the chapter #1! The last exercise was fun as well. It is a Zip file cracker.

    
    
    <code>
    # Violent Python
    # Chapter #1
    # Exercise #3 Zip file cracker
    # By: Marin Alcaraz
    
    import zipfile
    import sys
    
    
    def decrypt_file(filename):
        zFile = zipfile.ZipFile(filename)
        dict_file = open("dict.txt", 'r')
        print "[*] Decrypting file..."
        for line in dict_file.readlines():
            password = line.strip('\n')
            try:
                zFile.extractall(pwd=password)
                return password
            except Exception, e:
                pass
    
    def main():
    
        if (len(sys.argv) == 2):
            filename = sys.argv[1]
            p = decrypt_file(filename)
            if p:
                print "[+] Password[" + p + "]"
        else:
            print "Usage: python py-pass.py file.zip"
            exit(0)
    
    if __name__ == '__main__':
        main()
    </code>
    
