import { sortedIndexOf } from '../src/sortedIndexOf'

describe( 'sortedIndexOf', () => {

  it( 'returns -1 when input is null', () => {
    expect( sortedIndexOf( null, 4 ) ).toBe( -1 )
  })
  
  it( 'returns -1 when the input is undefined', () => {
    expect( sortedIndexOf( undefined, 'string' ) ).toBe( -1 )
  })

  describe( 'when input is not an array', () => {
    
    it( 'returns -1 for String', () => {
      expect( sortedIndexOf( 'blah', 4) ).toEqual( -1 )
    })

    it( 'returns -1 for Integer', () => {
      expect( sortedIndexOf( 3, 3 ) ).toEqual( -1 )
    })
  
    it( 'returns -1 for Boolean', () => {
      expect( sortedIndexOf( true, 4) ).toEqual( -1 )
    })

    it( 'return -1 for Object', () => {
      expect( sortedIndexOf({a:1}, 5) ).toEqual( -1 ) 
    })
  })

   describe( 'when input is an array', () => {
    
    it( 'returns lowest alphabetical index at which value should be inserted into an array', () => {
      expect( sortedIndexOf( ['a', 'a', 'b', 'c'], 'b' ) ).toEqual( 2 )
    })  
    
    it( 'returns the lowest numerical index at which value should be inserted into an array', () => {
      expect( sortedIndexOf( [10, 20, 30, 50, 60], 40) ).toEqual( 3 )
    })
  
    it( 'returns 0 when value argument does not match typeof elements in array', () => {
      expect( sortedIndexOf( [1, 2, 3, 4, 5, 6, 7], 'b' ) ).toEqual( -1 )
    })

  })  

})  