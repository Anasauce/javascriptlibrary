//chunk the shit out of things
const chunk = (arr, chunkSize=1) => {
  if (! (arr instanceof Array || typeof (arr) === 'string' ))  {
    return []
  }

  let groups = [] 

  if ( typeof (arr) === 'string' ) {
    arr = arr.split('')
  }

  for (let i = 0; i < arr.length; i += chunkSize) {
    groups.push(arr.slice(i, i + chunkSize))
  }
  
  return groups
  
}


export { chunk }