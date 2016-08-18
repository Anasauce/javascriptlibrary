const memoize = ( fnc, resolver ) => {
  let cache = {}
  let keyResolver = resolver || ( a => a[0] )

  const memoized = (...args) => {
    const key = keyResolver( args )

    if( cache[ key ] === undefined ) {
      cache[ key ] = fnc( ...args )
    }

    return cache[ key ]
  }

  memoized.cache = cache

  return memoized
}

export { memoize }