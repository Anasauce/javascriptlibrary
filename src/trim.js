
const trim = ( value, chars ) => {
  const input = ( value || '' ).toString()
  const characters = chars || '\t\n '

  return trimFromEnd( trimFromEnd( input, characters ), characters )
}

const trimFromEnd = (input, chars) => {
  let result = ''
  let stop = false

  for( let index = input.length - 1; index >= 0; index-- ) {
    let skip = false

    for( let charIndex = 0; charIndex < chars.length && ! stop; charIndex++ ) {
      skip = skip || input[ index ] === chars[ charIndex ]
    }

    if( ! skip ) {
      stop = true
      result += input[ index ]
    }
  }

  return result
}

export { trim, trimFromEnd }