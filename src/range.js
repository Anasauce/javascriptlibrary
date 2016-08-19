const range = ( ...args ) => {  
  const { start, step, end } = parseRangeParams( args )
  let result = []

  if( step < 0 ) {
    for( let value = start; value > end; value += step ) {
      result.push( value )
    }
  } else {
    for( let value = start; value < end; value += step ) {
      result.push( value )
    }    
  }

  return result
}

const parseRangeParams = args => {
  if( args.length === 1 ) {
    return { start: 0, end: args[ 0 ], step: args[ 0 ] >= 0 ? 1 : -1 }
  } else if( args.length === 2 ) {
    return { start: args[ 0 ], end: args[ 1 ], step: args[ 1 ] >= 0 ? 1 : -1 }
  } else {
    return { start: args[ 0 ], end: args[ 1 ], step: args[ 2 ]}
  }
}

export { range }