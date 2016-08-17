#_.wrap

###Overview

Creates a function that provides a value as its first argument and a wrapping function as its second argument. The wrapper is equal to the identity  if it doesn't receive a wrapping function. It returns the new function.

###Technical Explanation

We created a const called wrap and assigned it two parameters, a value and a wrapper. Within that, const paramOne is identified as the value provided. Fn is identified as the wrapper or the identity. We then return the the resulting function.

###Code Examples

~~~~ const myNewFunction = wrap( 5, valueOne => valueOne * 2 )

myNewFunction() ~~~~

