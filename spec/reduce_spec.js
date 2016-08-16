import { reduce } from '../src/reduce'

const testObject = () => {
  let callCount = 0
  const iteratee = () => callCount++

  return { callCount, iteratee }
}

const sum = (memo, value) => memo + value

describe( 'reduce', () => {
  describe( 'when the type of input is not a String, Array, or Object', () => {
    it( 'returns undefined', () => {
      expect( reduce( null ) ).toBe( undefined )
      expect( reduce( undefined ) ).toBe( undefined )
      expect( reduce( 1 ) ).toBe( undefined )
      expect( reduce( true ) ).toBe( undefined )
    })
  })

  describe( 'when input is an array', () => {
    it( 'applies iteratee to each element in array, starting with memo value', () => {
      expect( reduce( [1,2,3], sum, 5 )).toEqual( 11 )
    })

    it( 'uses first element when memo is not provided', () => {
      expect( reduce( [1,2,3], sum ) ).toEqual( 6 )
    })

    it( 'invokes iteratee with memo, value, index, array', () => {
      const iteratee = (memo, value, index, array) => 
        `${memo}-${value}-${index}-${array[index]}`

      expect( reduce( [ 'a', 'b' ], iteratee, '' ) ).toEqual( '-a-0-a-b-1-b' )
    })

    describe( 'and has only one element', () => {
      it( 'returns single value without invoking iteratee', () => {
        const test = testObject()

        reduce( [ 'a' ], test.iteratee, 2 )
        expect( test.callCount ).toEqual( 0 )
      })      
    })
  })

  describe( 'when input is an object', () => {
    it( 'invokes iteratee with memo, value, key, object', () => {
      const iteratee = (memo, value, key, object) => 
        `${memo}-${value}-${key}-${object[key]}`

      expect( reduce( { a: 1, b: 2 }, iteratee, '' ) ).toEqual( '-1-a-1-2-b-2' )
    })
  })

  describe( 'when input is string', () => {
    it( 'returns the result of invoking iteratee on each character', () => {
      expect( reduce( 'string', (memo, char) => memo + char.charCodeAt(0), 0 ) ).toEqual( 663 )
    })
  })
})