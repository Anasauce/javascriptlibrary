import { map } from '../src/map'

describe( 'map', () => {
  it( 'returns an empty array for a null input', () => {
    expect( map( null ) ).toEqual( [] )
  })

  it( 'returns an empty array for an undefined input', () => {
    expect( map( undefined ) ).toEqual( [] )
  })

  it( 'returns an empty array for input that are not Array, Object, or String', () => {
    expect( map( 1 ) ).toEqual( [] )
  })

  describe( 'given a string as input', () => {
    it( 'returns a new array composed of result of invoking iteratee on each character', () => {
      expect( map( 'a string', a => a + a ) )
        .toEqual( [ 'aa', '  ', 'ss', 'tt', 'rr', 'ii', 'nn', 'gg' ] )
    })
  })

  describe( 'given an array as input', () => {
    it( 'returns a new array composed of result of invoking iteratee on each element', () => {
      expect( map( [2,3,4], a => a + a ) ).toEqual( [ 4, 6, 8 ] )
    })

    it( 'returns a new array composed of same elements when iteratee not defined', () => {
      expect( map( [ 1, 'a', { b: 2 } ] ) ) .toEqual( [ 1, 'a', { b: 2 } ] )
    })

    it( 'invokes the iteratee with three arguments: value, index, array', () => {
      const testFunction = (value, index, array) =>
        `${value}-${index}-${array[index]}`

      expect( map( [ 1, 2 ], testFunction ) ).toEqual( [ '1-0-1', '2-1-2' ])
    })
  })

  describe( 'given an object as input', () => {
    it( 'returns a new array composed of result of invoking iteratee on each value', () => {
      expect( map( { a: 1, b: 2, c:3} ) ).toEqual( [ 1, 2, 3 ] )
    })

    it( 'invokes the iteratee with three arguments: value, key, object', () => {
      const testFunction = (value, key, object) =>
        `${value}-${key}-${object[key]}`

      expect( map( { a: 1, b: 2}, testFunction ) ).toEqual( [ '1-a-1', '2-b-2' ])
    })
  })

})
