import { identity } from '../src/test'

describe( 'nothing', () => {
  it( 'does something', () => {
    expect( identity( 1 ) ).toEqual( 1 )
  })
})