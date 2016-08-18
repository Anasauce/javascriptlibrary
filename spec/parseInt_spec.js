import { parseInt } from '../src/parseInt'

describe( 'parseInt', () => {
  it( 'defaults to base 10', () => {
    expect( parseInt( '138' ) ).toEqual( 138 )
  })

  it( 'accepts other bases', () => {
    expect( parseInt( '1010', 2 )).toEqual( 10 )
  })

  it( 'handles negative numbers', () => {
    expect( parseInt( '-1a', 16 )).toEqual( -26 )
  })

  it( 'handles the hexadecimal prefix 0x', () => {
    expect( parseInt( '0x1a' )).toEqual( 26 )
  })

  it( 'handles the hexadecimal prefix 0X', () => {
    expect( parseInt( '0X1a' )).toEqual( 26 )
  })

  it( 'handles upper and lower case digits', () => {
    expect( parseInt( 'ABcdE', 25 )).toEqual( 4085964 )
  })

  it( 'handles leading 0s', () => {
    expect( parseInt( '00000000000003' )).toEqual( 3 )
  })
})