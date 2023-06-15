#!/usr/bin/python3
def roman_to_int(roman_string):
    if not roman_string:
        return 0
    roman_int_dict = {'M': 1000, 'D': 500, 'C': 100, 'L': 50,
                      'X': 10, 'V': 5, 'I': 1}
    result = [roman_int_dict.get(sym) for sym in roman_string]
    if None in result:
        return 0
    return (lambda x, y: x + y if y <= x else y - x, result)
