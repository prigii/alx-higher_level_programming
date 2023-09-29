#!/usr/bin/python3
import urllib.request

if __name__ == "__main__":
    url = "https://alx-intranet.hbtn.io/status"
    with urllib.request.urlopen(url) as response:
        body = response.read()
        print(f"Body response:\n\t- type: {type(body)}\n\t- content: 
    {body}\n\t- utf8 content: {body.decode('utf-8')}")
