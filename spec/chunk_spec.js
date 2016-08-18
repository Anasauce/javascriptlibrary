import { chunk } from '../src/chunk'

describe( 'chunk', () => {

    it( 'returns an empty array when input is null', () => {
      expect( chunk( null ) ).toEqual( [] )
    })

    it( 'returns an empty array when input is undefined', () => {
      expect( chunk( undefined ) ).toEqual( [] )
    })
  
  describe( 'when input is not an array', () => {

    it( 'returns an empty array when input is an Integer', () => {
      expect( chunk( 202 ) ).toEqual( [] )
    })
    
    it( 'returns an empty array when input is an Boolean', () => {
      expect( chunk( true ) ).toEqual( [] )
    })

    it( 'returns an empty array when input is an Object', () => {
      expect( chunk( { a:1 } ) ).toEqual( [] )
    })

    it( 'returns an array of arrays for each charater in the String when input is a String', () => {
      expect( chunk( 'why' ) ).toEqual( [['w'], ['h'], ['y']] )
    })

  })

  describe( 'when input is a array', () => {

    it( 'returns an array of arrays for each element in the array', () => {
      expect( chunk( [1, 2, 3] ) ).toEqual( [[1], [2], [3]] )
    })
  
  })

    describe( 'and argument of [size] is given', () => {

      it( 'splits array by length of [size] and returns an array of arrays', () => {
        expect( chunk( [1, 2, 1, 2], 2 ) ).toEqual( [[1, 2], [1, 2]] )
      })

      describe( 'if array cannot be split evenly', () => {

        it( 'returns array of arrays with length of [size] with remaining elements in last array', () => {
          expect( chunk( [1, 2, 3, 4, 5], 2 ) ).toEqual( [[1, 2,], [3, 4], [5]] )
        })
      })
    
    })
    
})  
