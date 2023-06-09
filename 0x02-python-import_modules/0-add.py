#!/usr/bin/python3
from add_0 import add


def main():
    # Assign values to variables a and b
    a = 1
    b = 2
    # Perform the addition and print the result
    print("{:d} + {:d} = {:d}".format(a, b, add(a, b)))


if __name__ == "__main__":
    main()
