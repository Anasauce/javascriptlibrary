import { escape } from 'lodash'
import { wrap } from '../src/wrap'

//creates a function that's provides a value to the wrapper as its first
//argument

//additional arguments given to the function are added to the argument
//provided to the wrapper... does this mean if we give it more than one input?
describe( 'wrap', () => {
  it( 'returns a function', () => {
    expect( typeof( wrap( b => b, a => a ) ) ).toBe( 'function' )
  })

  it( 'defaults wrapper to identity when not supplied', () => {
    expect( wrap( 1 )() ).toEqual( 1 )
  })

  it( 'supplies the value as the first argument of the returned function', () => {
    const wrapped = wrap( 1, a => a )

    expect( wrapped() ).toEqual( 1 )
  })

  it( 'accepts additional arguments', () => {
    const wrapped = wrap( 1, (...args) => args.length )

    expect( wrapped( 2, 3, 4 ) ).toEqual( 4 )
  })

  it( 'does the same thing as lodash', () => {
    const p = wrap( escape, (func, text) => `<p>${func(text)}</p>` )

    expect( p('fred, barney, & pebbles') ).toEqual( '<p>fred, barney, &amp; pebbles</p>' )
  })

  it( 'does my sample from my documentation', () => {
    const test = wrap( 5, (a, b) => a * 2 + b )

    expect( test( 2 ) ).toEqual( 12 )

  })

})