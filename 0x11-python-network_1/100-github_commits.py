#!/usr/bin/python3
"""
uses the GitHub API to list the 10 most recent commits of
the repository “rails” by the user “rails”
"""
import requests
import sys


def solve_challenge():
    """" solving challenge function """
    repository_name = sys.argv[1]
    owner_name = sys.argv[2]
    response = requests.get(f"https://api.github.com/repos/\
        {owner_name}/{repository_name}/commits")
    try:
        json_response = response.json()
        for commit in json_response[:10]:
            sha = commit["sha"]
            author_name = commit["commit"]["author"]["name"]
            print(f"{sha}: {author_name}")
    except ValueError:
        print("Not a valid JSON")


solve_challenge()
