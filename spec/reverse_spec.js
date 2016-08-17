import { reverse } from '../src/reverse'

describe( 'reverse', () => {

  it( 'returns undefined when input is undefined ', () => {
    expect( reverse( undefined ) ).toBe( undefined )
  })

  it( 'returns null when input is null ', () => {
    expect( reverse( null ) ).toBe( null )
  })

  describe( 'when input is not an array', () => {
  
    it( 'when input is a single integer, returns that integer', () => {
      expect( reverse( 13 ) ).toEqual( 13 )
    })
    
    it( 'when input is Boolean return value of Boolean', () => {
      expect( reverse( true ) ).toEqual( true )
    })

    it( 'when input is an Object it returns that Object', () => {
      expect( reverse( {a:1} ) ).toEqual( {a:1} )
    })

  })
  
 describe( 'when input is an array', () => {

    it( 'returns array in the opposite order', () => {
      expect( reverse( [1, 2, 3 ,4] ) ).toEqual( [4, 3, 2, 1] )
    })

  })

})  

