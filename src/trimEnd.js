import { trimFromEnd } from './trim'

const trimEnd = ( value, chars ) => {
  const input = ( value || '' ).toString()
  const characters = chars || '\t\n '

  const intermediate = trimFromEnd( input, characters )
  let result = ''

  for( let index = intermediate.length - 1; index >= 0; index-- ) {
    result += intermediate[ index ]
  }

  return result
}

export { trimEnd }