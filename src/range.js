const range = integer => {  

let array = []

  if ( integer > 0 ) {
    for( var i =0; i<= integer; i++ ) {
      array.push( Math.abs( i ) )
    }
  } 

  else {
    for(var i =0; i >= integer; i--) {
      array.push( -Math.abs( i ) )
      
    }  
  }
  return array
}

export { range }