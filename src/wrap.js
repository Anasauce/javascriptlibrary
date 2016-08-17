const wrap = ( value, wrapper ) => {
  const paramOne = value
  const fn = wrapper || ( a => a )

  return ( ...args ) => {
    return fn( paramOne, ...args )
  }
}

export { wrap }

