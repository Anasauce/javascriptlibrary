import { range } from '../src/range'

fdescribe( 'range', () => {

  it( 'returns an empty array when input is null', () => {
    expect( range( null ) ).toEqual( [] )
  })

  it( 'returns an empty array when input is undefined', () => {
    expect( range( undefined ) ).toEqual( [] )
  })

  it( 'returns an empty array when input is an Object', () => {
    expect( range( {a:1} ) ).toEqual( [] )
  })

  it( 'returns an empty array when input is a String', () => {
    expect( range( 'hello' ) ).toEqual( [] )
  })

  it( 'returns and empty array when input is boolean', () => {
    expect( range( false ) ).toEqual( [] )
  })

  it( 'returns an empty array when input is 0', () => {
    expect( range( 0 ) ).toEqual( [] )
  }) 

  it( 'returns an array of numbers progressing from start up to, but not including, end', () => {
    expect( range( 0, 5, 1) ).toEqual( [ 0, 1, 2, 3, 4 ] )
  })

  it( 'defaults to start 0 and step 1 when only one argument provided', () => {
    expect( range( 3 ) ).toEqual( [ 0, 1, 2 ] )
  })

  it( 'defaults to step 1 when step is not provided', () => {
    expect( range( 3, 6 ) ).toEqual( [ 3, 4, 5 ] )
  })

  it( 'uses a step of -1 if a negative end is specified without an start or step', () => {
    expect( range( -4 ) ).toEqual( [ 0, -1, -2, -3 ] )
  })

  it( 'creates an array that uses specified step value', () => {
    expect( range( 0, 25, 5 ) ).toEqual( [ 0, 5, 10, 15, 20 ] )
  })

  it( 'can use specified step value when negative', () => {
    expect( range( 0, -12, -3 ) ).toEqual( [ 0, -3, -6, -9 ] )
  })

  it( 'creates a range that spans 0', () => {
    expect( range( 2, -3 ) ).toEqual( [2, 1, 0, -1, -2 ] )    
  })
})
