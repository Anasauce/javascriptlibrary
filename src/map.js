const map = (array, iteratee) => {
  if( ! isMappable( array ) ) {
    return []
  }

  const result = []
  const fn = iteratee || ( a => a )

  for( const key in array ) {
    result.push( fn( array[ key ], key, array ) )
  }

  return result
}

const isMappable = array => {
  return array !== null && (
    array instanceof Array ||
    typeof( array ) === 'object' ||
    typeof( array ) === 'string'
  )
}

export { map }