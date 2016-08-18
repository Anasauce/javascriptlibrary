const parseInt = (input, base=10) => {
  const { number, modifier } = parseNegative( input )
  const { result, radix } = parseHexadecimal( number, base )

  let total = 0

  for( let index = 0; index < result.length; index++ ) {
    total += Math.pow( radix, result.length - index - 1 ) * 
      toDigit( result[ index ], base )
  }

  return total * modifier
}

const LOWER_A = 97
const LOWER_Z = 122
const UPPER_A = 65
const UPPER_Z = 90
const ZERO = 48 
const NINE = 57

const toDigit = (char, base) => {
  const code = char.charCodeAt( 0 )

  if( code >= LOWER_A && code <= LOWER_Z ) {
    return code - LOWER_A + 10
  } else if( code >= UPPER_A && code <= UPPER_Z ) {
    return code - UPPER_A + 10
  } else if( code >= ZERO && code <= NINE ) {
    return code - ZERO
  }
}

const parseNegative = number => {
  if( number[ 0 ] === '-' ) {
    return { modifier: -1, number: number.slice( 1 ) }
  } else {
    return { modifier: 1, number }
  }
}

const parseHexadecimal = (number, base) => {
  if( number[ 0 ] === '0' && ( number[ 1 ] === 'x' || number[ 1 ] === 'X' ) ) {
    return { radix: 16, result: number.slice( 2 ) }
  } else {
    return { radix: base, result: number }
  }
}

export { parseInt }