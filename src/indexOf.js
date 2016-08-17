const indexOf = ( array, value, fromIndex ) => {

  if ( array === null || array === undefined) {
    return -1
  }

  if ( fromIndex === undefined ) {
     
    for ( i = 0; i < array.length; i++ ) {
      if ( array[i] === value ) {
        return i
      }
    }
    return -1
  }
    
  else {
    for ( var i = (fromIndex + 1); i < array.length; i++ ) {
      if ( array[i] === value ) {
        return i
      }
    }
    return -1  
  } 

}
   
export { indexOf }