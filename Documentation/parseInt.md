#parseInt

###Overview

Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is used unless value is a hexadecimal, in which case a radix of 16 is used. 

###Technical Explanation

Takes an input with the base of 10. With a starting index of 0, it searches for the index of the the input. If a hexidecimal input is given, toDigit is used with the ascii value to convert the letters to digits. It then converts the input to the correct base 10 interger.

###Code Examples

```_.parseInt('08');
// ➜ 8

_.map(['6', '08', '10'], _.parseInt);
// ➜ [6, 8, 10]```

