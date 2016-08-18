#trimEnd

###Overview

It trims all trailing white spaces or specified characters.

###Technical Explanation

Two arguments are taken, 'string', the string we want to trim, and 'chars', the content we want to trim. If the string input is something besides a string, it will be converted with _.toString, and then trimmed and returned as a string. The function will iterate through the string from right to left, stopping at whatever index it first encounters a non-target (a non-target being any character that wasn't specificed as the 'chars' value). If the string input is null, empty, or undefined then a simple empty string will be returned.

###Code Examples

```_.trimEnd('  abc  ');
// ➜ '  abc'

_.trimEnd('-_-abc-_-', '_-');
// ➜ '-_-abc'```
