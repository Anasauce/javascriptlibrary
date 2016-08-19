const range = (integer, integer2) => {  

if(typeof (integer) != "number" || integer === 0 ) {
    return []
  }

let array = []

  if ( integer > 0  && integer2 == null) {
    for( var i =0; i<= integer; i++ ) {
      array.push( Math.abs( i ) )
    }
  } 

  else if ( integer < 0 && integer2 == null){
    for(var i =0; i >= integer; i--) {
      array.push( -Math.abs( i ) )
      
    }
  }
  else{
    return Math.abs(integer - integer2)
    }  

  return array
}

export { range }