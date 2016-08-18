import { range } from '../src/range'

fdescribe( 'range', () => {

  it( 'returns an empty array when input is null', () => {
    expect( range( null ) ).toEqual( [] )
  })

  it( 'returns an empty array when input is undefined', () => {
    expect( range( undefined ) ).toEqual( [] )
  })

  it( 'returns an empty array when input is an Object', () => {
    expect( range( {a:b} ) ).toEqual( [] )
  })

  it( 'returns an empty array when input is a String', () => {
    expect( range( 'hello' ) ).toEqual( [] )
  })

    describe( 'when input is a Boolean', () => {

      it( 'returns and empty array when input is false', () => {
        expect( range( false ) ).toEqual( [] )
      })

      it( 'retruns 0 when input is true', () => {
        expect( range( true ) ).toEqual( 0 )
      })

    })

  it( 'returns an empty array when input is 0', () => {
    expect( range( 0 ) ).toEqual( [] )
  }) 

    describe( 'when only end argument is given', () => {

      it( 'returns array of numbers incremented by one from 0 to [end] argument', () => {
        expect( range( -5 ) ).toEqual( [0, -1, -2, -3, -4] )
        expect( range( 5 ) ).toEqual( [0, 1, 2, 3, 4] )
      })

    })

    describe( 'when start and end arguments are given', () => {

      it( 'returns array of numbers incremented by one from, and including, [start] to [end]', () => {
        expect( range( 2, -3 ) ).toEqual( [2, 1, 0, -1, -2] )
        expect( range( 3, 7 ) ).toEqual( [3, 4, 5, 6] )
      })

      it( 'when [step] argument is given increments by value of that step, from start, in direction of the [end] argument', () => {
        expect( range( 2, 10, 2) ).toEqual( [2, 4, 6, 8] )
        expect( range (0, -24, -6) ).toEqual( [0, -6, -12, -18] )
      })
 
    })

})      