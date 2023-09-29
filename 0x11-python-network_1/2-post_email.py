#!/usr/bin/python3
"""
POSTS an email using a given URL
"""
import urllib.request
import sys

if __name__ == "__main__":
    url = sys.argv[1]
    email = sys.argv[2]
    data = urllib.parse.urlencode({"email": email}).encode()
    with urllib.request.urlopen(url, data) as response:
        body = response.read().decode("utf-8")
        print(f"The body of the response (decoded in utf-8) is:\n\n{body}")
