import { trimEnd } from '../src/trimEnd'

describe( 'trimEnd', () => {
  it( 'removes all trailing whitespaces if chars argument is undefined', () => {
    expect( trimEnd(' this is a test string ')).toEqual( ' this is a test string' )
  })

  it( 'returns the given string with the specficed characters removed', () => {
    expect( trimEnd('this is a test string', 't') ).toEqual(  'this is a test string')
  })

  describe( 'when it is given an invalid value', () => {
    it( 'returns trimmed string when given an array', () => {
      expect( trimEnd([ ' this is a test array ' ])).toEqual( ' this is a test array' )
    })

    it( 'returns a trimmed string when given an object', () => {
      expect( trimEnd({ a:1 })).toEqual( '[object Object]' )
    })

    it( 'returns trimmed string when given a boolean', () => {
      expect( trimEnd( true )).toEqual( 'true' )
    })

    it( 'returns trimmed string when given an number', () => {
      expect( trimEnd(  8567 )).toEqual( '8567' )
    })

    it( 'returns ... when string input is null', () => {
      expect( trimEnd( null)).toEqual('')
    })

    it( 'returns empty string when string input is empty', () => {
      expect( trimEnd( '')).toEqual('')
    })

    it( 'returns empty string when string input is undefined', () => {
      expect( trimEnd( )).toEqual('')
    })
  })

})