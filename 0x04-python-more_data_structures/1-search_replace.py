#!/usr/bin/python3
def search_replace(my_list, search, replace):
    """
    Replaces all occurrences of an element by another in a new list
    ...

    Parameters

    ----------

    my_list : list

    Initial list of elements
    search : integer
    The element to replace in the list
    replace : integer
    The new element

    Return:
    a new list with the new elements
    """

    new_list = list(map(lambda x: replace if x == search else x, my_list))
    return (new_list)
