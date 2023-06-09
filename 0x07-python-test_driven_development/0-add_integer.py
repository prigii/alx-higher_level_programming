#!/usr/bin/python3
# 0-add_integer.py
"""Defines an integer addition function."""


def add_integer(a, b=98):
    # Check if a is an integer or float
    """Return the integer addition of a and b.

    Float arguments are typecasted to ints before addition is performed.

    Raises:
        TypeError: If either of a or b is a non-integer and non-float.
    """
    if not isinstance(a, (int, float)):
        raise TypeError("a must be an integer or b must be an integer")

    # Check if b is an integer or float
    if not isinstance(b, (int, float)):
        raise TypeError("a must be an integer or b must be an integer")

    # Cast a and b to integers if they are floats
    if isinstance(a, float):
        a = int(a)
    if isinstance(b, float):
        b = int(b)

    # Return the addition of a and b
    return a + b
