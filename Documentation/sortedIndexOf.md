#sortedIndexOf

###Overview

Similar to indexOf; it performs a binary search on a sorted array (the first argument) to find the index of the specified value (the second argument).


###Technical Explanation

It represents the search space as interval sections of the array. Each section is defined with a minIndex and maxIndex, and the median of these is checked for the specified value. If the value is not found, the next section is searched. This continues until it's found.

(number): Returns the index of the matched value, else -1.
###Code Examples

```_.sortedIndexOf([4, 5, 5, 5, 6], 5);
// ➜ 1```

