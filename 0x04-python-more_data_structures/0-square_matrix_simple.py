#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    """
    Computes the square value of all integers of a matrix.

    Args:
    matrix: A 2 dimensional array.

    Returns:
    A new matrix:
    Same size as matrix
    Each value should be the square of the value of the input
    Initial matrix should not be modified

    """


if not matrix:
    return []

new_matrix = map(lambda row: [value ** 2 for value in row], matrix)

return new_matrix
