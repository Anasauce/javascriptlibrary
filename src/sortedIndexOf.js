const sortedIndexOf = ( array, value ) => { 
  if(! ( array instanceof Array )) {
    return -1
  }

  if( typeof value != typeof array[0] ){
    return -1
  }

  let minIndex = 0
  let maxIndex = array.length - 1
  let currentIndex = 0

  while( minIndex <= maxIndex ) {
    currentIndex = ( minIndex + maxIndex ) / 2 | 0
    let currentElement = array[ currentIndex ]

    if( currentElement < value ) {
      minIndex = currentIndex + 1
    }
    else if( currentElement > value ) {
      maxIndex = currentIndex - 1
    }
    else {
      return currentIndex
    }
  }

  return currentIndex
}

export { sortedIndexOf }