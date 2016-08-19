#memoize

###Overview

Creates a new function that memoizes the result of a iteratee function.

###Technical Explanation

Creates a function that memoizes the result of func. If resolver is provided, it determines the cache key for storing the result based on the arguments provided to the memoized function. By default, the first argument provided to the memoized function is used as the map cache key. The func is invoked with the this binding of the memoized function. 

###Code Examples

```var object = { 'a': 1, 'b': 2 };
var other = { 'c': 3, 'd': 4 };

var values = _.memoize(_.values);
values(object);
// ➜ [1, 2]

values(other);
// ➜ [3, 4]

object.a = 2;
values(object);
// ➜ [1, 2]

// Modify the result cache.
values.cache.set(object, ['a', 'b']);
values(object);
// ➜ ['a', 'b']

// Replace _.memoize.Cache.
_.memoize.Cache = WeakMap;```


