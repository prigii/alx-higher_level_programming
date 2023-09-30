#!/usr/bin/python3
"""
Takes in a letter and sends a POST request to
http://0.0.0.0:5000/search_user with the letter as a parameter.
"""
import requests
import sys


if __name__ == "__main__":
    if len(sys.argv) > 1:
        letter = sys.argv[1] 
    else:
        letter = ""
    url = "http://0.0.0.0:5000/search_user"
    data={"q": letter}
    response = requests.post(url, data)
    try:
        json_response = response.json()
        if json_response:
            print(f"[{json_response['id']}] {json_response['name']}")
        else:
            print("No result")
    except Exception:
        print("Not a valid JSON")
