import { indexOf } from '../src/indexOf'

describe( 'indexOf', () => {
    
  it( 'returns -1 when input is null', () => {
    expect( indexOf( null, 4 ) ).toBe( -1 )
  })
  
  it( 'returns -1 when the input is undefined', () => {
    expect( indexOf( undefined, 'string' ) ).toBe( -1 )
  })

  describe( 'when input is not an array', () => {
    
    it( 'returns -1 for String', () => {
      expect( indexOf( 'blah', 'blah') ).toEqual( -1 )
    })

    it( 'returns -1 for Integer', () => {
      expect( indexOf( 3, 3 ) ).toEqual( -1 )
    })
  
    it( 'returns -1 for Boolean', () => {
      expect( indexOf( true, true) ).toEqual( -1 )

    })
    it( 'return -1 for Object', () => {
      expect( indexOf({a:1, b:2}, 5, 2) ).toEqual( -1 ) 
    })
  
  })


  describe( 'when input is an array', () => {
    
    it( 'returns -1 when value given is not found in the array', () => {
      expect( indexOf( [1,2,3,4], 10 ) ).toEqual( -1 )
    })  
    
    it( 'returns the index of the matched value at its first occurance in the array', () => {
      expect( indexOf( ['to', 'be', 'stringy', 'be'], 'be') ).toEqual( 1 )
    })
  
  })

  describe( 'when [fromIndex] argument is given', () => {
    
    it( 'returns index of first occurance matched value after fromIndex position in array', () => {
      expect( indexOf( [1, 2, 1, 2, 1, 2], 2, 3 ) ).toEqual( 5 )
    })
  
  })

})