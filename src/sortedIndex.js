const sortedIndex = ( array, value ) => {
 
    let minIndex = 0
    let maxIndex = array.length - 1
    let searchElement = value 
 
    while (minIndex <= maxIndex) {
        let currentIndex = (minIndex + maxIndex) / 2 | 0
        let currentElement = array[currentIndex]
 
        if (currentElement < searchElement) {
            minIndex = currentIndex + 1
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1
        }
        else {
            return currentIndex
        }
    }
 
    return -1
}

export { sortedIndex }