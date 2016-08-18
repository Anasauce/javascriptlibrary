import { memoize } from '../src/memoize'

describe( 'memoize', () => {
  it( 'creates a function', () => {
    expect( typeof( memoize( a => a ) ) ).toEqual( 'function' )
  })

  it( 'creates a function that returns expected result', () => {
    expect( memoize( a => a )( 1 ) ).toEqual ( 1 )
  })

  it( 'creates a function that exposes a cache property', () => {
    expect( memoize( a => a ).cache ).toEqual( {} )
  })

  it( 'uses the first argument to function as cache key', () => {
    const fnc = memoize( a => a )
    fnc( 1 )

    expect( fnc.cache[ 1 ] ).toEqual( 1 )
  })

  it( 'uses the resolver function to calculate cache key', () => {
    const resolver = a => `${a}-hi`
    const fnc = memoize( a => a, resolver )
    fnc( 3 )

    expect( fnc.cache[ '3-hi' ] ).toEqual( 3 )
  })

  it( 'only invokes the function once', () => {
    const closure = () => {
      let count = 0

      const fnc = a => count++ 
      const counter = () => count

      return { fnc, counter }
    }
    const test = closure()

    const fnc = memoize( test.fnc )
    fnc( 3 )
    fnc( 3 )
    fnc( 3 )
    fnc( 3 )

    expect( test.counter() ).toEqual( 1 )
  })
})
