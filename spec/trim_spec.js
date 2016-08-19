import { trim } from '../src/trim'


//UNLESS you can remove all chars within a certain index range? ask JRob
//works from left to right, stops when it sees unwanted chars,
//then works from right to left, stops when it sees unwanted chars

fdescribe( 'trim', () => {
  it( 'removes all trailing and leading whitespaces if chars argument is undefined', () => {
    expect( trim(' this is a test string ')).toEqual( 'this is a test string' )
  })

  it( 'returns the given string with the specficed characters removed', () => {
    expect( trim('this is a test string', 't') ).toEqual(  'his is a test string')
  })

  describe( 'when it is given an invalid value', () => {
    it( 'returns trimmed string when given an array', () => {
      expect( trim([ ' this is a test array ' ]).toEqual( 'this is a test array' )
    })

    it( 'returns a trimmed string when given an object', () => {
      expect( trim({ a:1 }).toEqual( 'a:1' )
    })

    it( 'returns trimmed string when given a boolean', () => {
      expect( trim( true )).toEqual( 'true' )
    })

    it( 'returns trimmed string when given an number', () => {
      expect( trim(  8567 )).toEqual( '8567' )
    })

    it( 'returns ... when string input is null', () => {
      expect( trim( null)).toEqual('')
    })

    it( 'returns empty string when string input is empty', () => {
      expect( trim( '')).toEqual('')
    })

    it( 'returns empty string when string input is undefined', () => {
      expect( trim( )).toEqual('')
    })

  })