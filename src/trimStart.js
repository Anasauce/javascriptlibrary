import { trimFromEnd } from './trim'


const trimStart = ( value, chars ) => {
  const input = ( value || '' ).toString()
  const characters = chars || '\t\n '

  let result = ''

  for( let index = input.length - 1; index >= 0; index-- ) {
    result += input[ index ]
  }

  return trimFromEnd( result, characters )
}


export { trimStart }