import { sortedIndex } from '../src/sortedIndex'

describe( 'sortedIndex', () => {

  it( 'returns -1 when input is null', () => {
    expect( sortedIndex( null, 4 ) ).toBe( 0 )
  })
  
  it( 'returns -1 when the input is undefined', () => {
    expect( sortedIndex( undefined, 'string' ) ).toBe( 0 )
  })

  describe( 'when input is not an array', () => {
    
    it( 'returns -1 for String', () => {
      expect( sortedIndex( 'blah', 4) ).toEqual( 0 )
    })

    it( 'returns -1 for Integer', () => {
      expect( sortedIndex( 3, 3 ) ).toEqual( NaN )
    })
  
    it( 'returns -1 for Boolean', () => {
      expect( sortedIndex( true, 4) ).toEqual( NaN )
    })

    it( 'return -1 for Object', () => {
      expect( sortedIndex({a:1}, 5) ).toEqual( NaN ) 
    })
  })

  fdescribe( 'when input is an array', () => {
    
    it( 'returns lowest alphabetical index at which value should be inserted into an array', () => {
      expect( sortedIndex( ['a', 'c', 'a', 'b'], 'b' ) ).toEqual( -1 )
    })  
    
    it( 'returns the lowest numerical index at which value should be inserted into an array', () => {
      expect( sortedIndex( [10, 20, 30, 50, 60], 40) ).toEqual( 3 )
    })
  
    it( 'returns 0 when value argument does not match typeof elements in array', () => {
      expect( sortedIndex( [1, 2, 3, 4, 5, 6, 7], 'b' ) ).toEqual( 0 )
    })

  })  

})  