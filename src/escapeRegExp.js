const escapeRegExp = input => {
  if( typeof( input ) !== 'string' ) {
    return ''
  }

  let result = ''

  for( let index = 0; index < input.length; index++ ) {
    if( isRegexCharacter( input[ index ] ) ) {
      result += "\\" + input[ index ]      
    } else {
      result += input[ index ]
    }
  }

  return result
}

// We need a collection of regex characters
const regexCharacters = [
  "^", "$", "\\", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", "|"
]

const regexChars = {
  "^": true, 
  "$": true, 
  "\\": true,
  ".": true, 
  "*": true, 
  "+": true, 
  "?": true, 
  "(": true, 
  ")": true, 
  "[": true, 
  "]": true, 
  "{": true, 
  "}": true,
  "|": true
}

const isRegexCharacter = char => {
  return regexChars[ char ] !== undefined
  // for( let index = 0; index < regexCharacters.length; index++ ) {
  //   if( regexCharacters[ index ] === char ) {
  //     return true
  //   }
  // }

  // return false
}


export { escapeRegExp }