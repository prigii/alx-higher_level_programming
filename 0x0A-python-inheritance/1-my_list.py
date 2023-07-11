#!/usr/bin/python3

"""
Mylist class
"""


class MyList(list):
    """
    Inherits from list class
    """

    def print_sorted(self):
        """
        Prints the list, but sorted (ascending sort)
        """
	sorted_list = sorted(self)
       
        print(sorted_list)
