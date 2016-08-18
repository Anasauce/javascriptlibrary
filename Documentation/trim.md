#trim

###Overview

It trims all leading and trailing whitespaces or specified characters.

###Technical Explanation

Two arguments are taken, 'string', the string we want to trim, and 'chars', the content we want to trim. If the string input is something besides a string, it will be converted with _.toString, and then trimmed and returned as a string. The function will iterate through the string from right to left, stopping at whatever index it first encounters a non-target (a non-target being any character that wasn't specificed as the 'chars' value). It will then iterate from left to right, also stopping at the first non-target it encounters from that side. If a chars value is specified, it should iterate fully through the whole string. If the string input is null, empty, or undefined then a simple empty string will be returned. It can be iterated through _.map

###Code Examples

``` _.trim('  abc  '); 
// ➜ 'abc' 
 
_.trim('-_-abc-_-', '_-'); 
// ➜ 'abc' 
 
_.map(['  foo  ', '  bar  '], _.trim); 
// ➜ ['foo', 'bar'] ```


