import { slice } from "../src/slice.js"

describes( "slice", () => {
  it("returns slice of an array from start up to but not including end", () => {
    expect( slice( [1, 2, 3, 4, 5], 2, 4 ))toEqual( [3, 4] )
  })

  it( "returns original array if no start or end are given", () => {
    expect( slice( [1, 2, 3, 4, 5] ))toEqual( [1, 2, 3, 4, 5] )
  })

  it( "returns slice of an array from start to array.length if no end is given", () => {
    expect( slice( [1, 2, 3, 4, 5], 2 ))toEqual( [ 3, 4, 5] )
  })

  it( "returns an empty array if start argument is not an index in the array", () => {
    expect( slice( [-1, -2, -3, -4, -5], 5 ))toEqual( [] )
  })

  it( "returns an empty array if an empty array is provided", () => {
    expect( slice( [] ))toEqual( [] )
  })
})


// Creates a slice of array from start up to, but not including, end. 

// Note: This method is used instead of Array#slice to ensure dense arrays are returned.

// Since
// 3.0.0

// Arguments
//  - array (Array): The array to slice.
//  - [start=0] (number): The start position.
//  - [end=array.length] (number): The end position.
// Returns
//  - (Array): Returns the slice of array.