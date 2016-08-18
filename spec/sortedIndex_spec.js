import { sortedIndex } from '../src/sortIndex'

describe( 'sortedIndex', () => {

  it( 'returns -1 when input is null', () => {
    expect( indexOf( null, 4 ) ).toBe( 0 )
  })
  
  it( 'returns -1 when the input is undefined', () => {
    expect( indexOf( undefined, 'string' ) ).toBe( 0 )
  })

  describe( 'when input is not an array', () => {
    
    it( 'returns -1 for String', () => {
      expect( indexOf( 'blah', 4) ).toEqual( 0 )
    })

    it( 'returns -1 for Integer', () => {
      expect( indexOf( 3, 3 ) ).toEqual( NaN )
    })
  
    it( 'returns -1 for Boolean', () => {
      expect( indexOf( true, 4) ).toEqual( NaN )
    })

    it( 'return -1 for Object', () => {
      expect( indexOf({a:1}, 5) ).toEqual( NaN ) 
    })
  })

  describe( 'when input is an array', () => {
    
    it( 'returns lowest alphabetical index at which value should be inserted into an array', () => {
      expect( indexOf( ['a', 'c', 'a', 'b'], 'b' ) ).toEqual( 1 )
    })  
    
    it( 'returns the lowest numerical index at which value should be inserted into an array', () => {
      expect( indexOf( [10, 20, 30, 50], 40) ).toEqual( 3 )
    })
  
    it( 'returns 0 when value argument does not match typeof elements in array', () => {
      expect( indexOf( [1, 2, 1, 2, 3], 'b' ) ).toEqual( 0 )
    })

  })  

})  