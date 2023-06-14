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

    new_matrix = matrix.copy()
    for i in range(len(matrix)):
        new_matrix = list(map(lambda x ** 2, row) for row in matrix]
    return (new_matrix)
