#!/usr/bin/python3
"""
Takes your GitHub credentials (username and password)
and uses the GitHub API to display your id
"""
import requests
import sys


def get_github_id():
    """ function that gets the github id """
    username = sys.argv[1]
    password = sys.argv[2]
    response = requests.get("https://api.github.com/user",
                            auth=(username, password))
    try:
        json_response = response.json()
        print(json_response["id"])
    except ValueError:
        print("Not a valid JSON")


get_github_id()
