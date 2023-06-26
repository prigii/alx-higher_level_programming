#!/usr/bin/python3
import sys


def safe_print_integer_err(value):
    try:
        integer_value = int(value)
        print("{:d}".format(integer_value))
    except ValueError:
        print("Exception: Invalid integer value", file=sys.stderr)
        return False
    return True
