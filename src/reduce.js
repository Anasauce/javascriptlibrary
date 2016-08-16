const reduce = (collection, iteratee, initialValue) => {
  let result = initialValue

  for( const key in collection ) {
    if( result === undefined ) {
      result = collection[ key ]
    } else {
      result = iteratee( result, collection[ key ], key, collection )
    }
  }

  return result
}

export { reduce }
