#!/usr/bin/python3
"""
Sends a request to a URL
"""
import urllib.request
import sys

if __name__ == "__main__":
    url = sys.argv[1]
    with urllib.request.urlopen(url) as response:
        x_request_id = response.headers.get("X-Request-Id")
        print(f"The value of the X-Request-Id variable in\
            the response header is: {x_request_id}")
