import { trimStart } from '../src/trimStart'

describe( 'trimStart', () => {
  it( 'removes all leading whitespaces if chars argument is undefined', () => {
    expect( trimStart(' this is a test string ')).toEqual( 'this is a test string ' )
  })

  it( 'returns the given string with the specficed characters removed', () => {
    expect( trimStart('this is a test string', 't') ).toEqual(  'his is a test string')
  })

  describe( 'when it is given an invalid value', () => {
    it( 'returns trimmed string when given an array', () => {
      expect( trimStart([ ' this is a test array ' ])).toEqual( 'this is a test array ' )
    })

    it( 'returns a trimmed string when given an object', () => {
      expect( trimStart({ a:1 })).toEqual( '[object Object]' )
    })

    it( 'returns trimmed string when given a boolean', () => {
      expect( trimStart( true )).toEqual( 'true' )
    })

    it( 'returns trimmed string when given an number', () => {
      expect( trimStart(  8567 )).toEqual( '8567' )
    })

    it( 'returns ... when string input is null', () => {
      expect( trimStart( null)).toEqual('')
    })

    it( 'returns empty string when string input is empty', () => {
      expect( trimStart( '')).toEqual('')
    })

    it( 'returns empty string when string input is undefined', () => {
      expect( trimStart( )).toEqual('')
    })
  })

})