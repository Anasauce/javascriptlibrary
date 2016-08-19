###range(array)

Takes and array and returns a new array in the reversed order.

# Overview

  Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it’s set to start with start then set to 0. 

# Code Example

'''
.range(4);
// ➜ [0, 1, 2, 3]

range(-4);
// ➜ [0, -1, -2, -3]

range(1, 5);
// ➜ [1, 2, 3, 4]

range(0, 20, 5);
// ➜ [0, 5, 10, 15]

range(0, -4, -1);
// ➜ [0, -1, -2, -3]

range(1, 4, 0);
// ➜ [1, 1, 1]

range(0);
// ➜ []
'''
