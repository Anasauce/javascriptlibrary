#chunk

###Overview

Splits an array into a group of arrays by the length of size. If the array can't be split evenly then the final chunk will be the remaining elements.


###Technical Explanation

It takes an array as its first argument and a "size" as its second. If the input provided is not an array, it will be converted into one. It iterates in a loop through the array and slices out a new array by 'size'. This is repeated until a chunk of the correct size can no longer be created. At this time, a final chunk will be created with the remaining elements of the original array. Array chunks are returned within an array.

###Code Examples

```_.chunk(['a', 'b', 'c', 'd'], 2);
// [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// [['a', 'b', 'c'], ['d']] ```

