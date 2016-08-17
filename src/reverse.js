
const reverse = collection => {
  if(! (collection instanceof Array)) {
    return collection
  }
  
  let array = []

  for( let index = collection.length - 1; index >= 0; index-- ) {
    array.push( collection[index] )  
  }
  
  return array
}

export { reverse }