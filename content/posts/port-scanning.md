+++
title = "Ports and Port Scanners"
date = "2020-02-28"
layout = "post"
author = "Marín"
tags = ["InfoSec", "golang"]
keywords = ["Port scanning", "InfoSec"]
description = "An explanation on what's a port and how to scan for ports"
showFullContent = false
+++

Have you ever wondered how an attacker knows which services to target? How can they determine which exploit they should use? port scanning is what gives the initial pieces of intel to them. It’s part of the process known as fingerprinting that will determine what in a system has the potential to be exploited. Let me tell you a story about what’s possible with this information:

In April 2017, [The Shadow Brokers](https://en.wikipedia.org/wiki/The__Shadow_Brokers) leaked an exploit developed by the NSA named [EternalBlue](https://en.wikipedia.org/wiki/EternalBlue). This exploit took advantage of a vulnerability on the SMB service (commonly used as printer share service) that granted an unauthenticated remote attacker to execute arbitrary code via specially crafted requests sent to the SMB server.

This exploit was a crucial piece of the now-infamous [WannaCry](https://en.wikipedia.org/wiki/WannaCry_ransomware_attack) and [NotPetya](https://www.wired.com/story/notpetya-cyberattack-ukraine-russia-code-crashed-the-world/) ransomware worms since it was used as its propagation tool.


# What is a port?

A port is a software construct that allows network communication between programs. It is described by a number. There are a bunch of well-known port numbers used by the [TCP and UDP protocol](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers) (22 for SSH, 80 for HTTP, 465 for SSL) that were assigned by the [Internet Assigned Numbers Authority (IANA)](https://en.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority) those ports are bound to programs that control key parts of the internet but if you so desire you can pick any number from 0 to 65535 to bind to your program.


# Why do people scan ports?

Since the [IANA](https://en.wikipedia.org/wiki/internet_Assigned_Numbers_Authority) bound every port number to a program it's easy to discover which services run on a computer by performing a port scan. When we perform a TCP port scan we are attempting  to connect to popular ports in an attempt to see if the port is open, closed or filtered by a firewall.

If you are trying to perform a security audit the first step you take is run a port scan to see which services are running in the target machine. “Juicy” services for attackers might be databases, FTP, or any web service that had recently disclosed a [Zero-day](https://en.wikipedia.org/wiki/Zero-day_(computing)) since the server administrator might have not updated the service yet and it could still be vulnerable.

Gathering these small pieces of information is more than enough for a third party to potentially cause harm to your machine.


# **How to scan a port**

The holy grail tool for port scanning is [nmap](https://nmap.org/) (from Network Mapper) you can run a quick scan by doing nmap -v scanme.nmap.org or you can try to run this version I learned from when I found it in [Black Hat Go](https://nostarch.com/blackhatgo):

```go
package main

import (
	"fmt"
	"net"
	"sort"
)

// The worker is in charge of making the network call to check if a port is open
// It takes a channel as argument so it can be run in paralel
func worker(ports, results chan int) {
	for p := range ports {
		// The URL of the host you wish to scan goes here
		address := fmt.Sprintf("scanme.nmap.org:%d", p)
		conn, err := net.Dial("tcp", address)

		if err != nil {
			// Send a 0 as result if the port is closed
			results <- 0
			continue
		}
		conn.Close()

		// If the port is open add it to the results channel
		results <- p
	}
}

func main() {
	// Create a buffered channel capped to 100 so you can send data without waiting
	// for the receiver to process it
	ports := make(chan int, 100)
	results := make(chan int)
	var openports []int

	fmt.Print("Dialing...")
	for i := 0; i < cap(ports); i++ {
		// launch the workers on goroutines so you don't have to wait for the
		// networks calls to come back!
		go worker(ports, results)
	}

	// This anonymous function will feed the workers with ports to analyze.
	go func() {
		for i := 1; i <= 1024; i++ {
			ports <- i
		}
	}()

	// And finally, process the results
	for i := 0; i < 1024; i++ {
		port := <-results
		if port != 0 {
			openports = append(openports, port)
		}
	}

	// Close your channels!
	close(ports)
	close(results)
	sort.Ints(openports)

	fmt.Print("\n")
	for _, port := range openports {
		fmt.Printf("%d open\n", port)
	}
}
```

# Is port scanning legal?

According to [nmap's legal terms](https://nmap.org/book/legal-issues.html) it's unlikely that you would go to jail for port scanning when it's just that but that doesn't mean that you should abuse the tool or the services being targeted. You could still get in serious trouble since nowadays, companies do "anti-hacking" provision who's legal ramifications could encompass port scanning as a hacking-related activity.

# References

- [Black Hat Go](https://nostarch.com/blackhatgo)
- [Port - Computer Networking](https://en.wikipedia.org/wiki/Port_%28computer_networking%29)
- [Why do people scan for ports?](https://security.stackexchange.com/questions/120711/why-do-hackers-scan-for-open-ports)
- [CVE-2017-0144](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-0144)

Special thanks to [Ray Sohn](https://hachibu.net/) for help editing.
