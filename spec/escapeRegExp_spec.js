import { escapeRegExp } from '../src/escapeRegExp'

fdescribe( 'escapeRegExp', () => {
  it( 'returns an empty string if an empty string is provided', () => {
    expect( escapeRegExp( '' ) ).toEqual( '' )
  })

  it( 'escapes regular expression character ^', () => {
    expect( escapeRegExp( 'ad^ad' ) ).toEqual( 'ad\\^ad' )
  })

  it( 'escapes regular expression character $', () => {
    expect( escapeRegExp( 'ad$ad' ) ).toEqual( 'ad\\$ad' )
  })

  it( 'escapes regular expression character .', () => {
    expect( escapeRegExp( 'ad.ad' ) ).toEqual( 'ad\\.ad' )
  })

  it( 'escapes regular expression character *', () => {
    expect( escapeRegExp( 'ad*ad' ) ).toEqual( 'ad\\*ad' )
  })

  it( 'escapes regular expression character +', () => {
    expect( escapeRegExp( 'ad+ad' ) ).toEqual( 'ad\\+ad' )
  })

  it( 'escapes regular expression character ?', () => {
    expect( escapeRegExp( 'ad?ad' ) ).toEqual( 'ad\\?ad' )
  })

  it( 'escapes regular expression character (', () => {
    expect( escapeRegExp( 'ad(ad' ) ).toEqual( 'ad\\(ad' )
  })

  it( 'escapes regular expression character )', () => {
    expect( escapeRegExp( 'ad)ad' ) ).toEqual( 'ad\\)ad' )
  })

  it( 'escapes regular expression character [', () => {
    expect( escapeRegExp( 'ad[ad' ) ).toEqual( 'ad\\[ad' )
  })

  it( 'escapes regular expression character ]', () => {
    expect( escapeRegExp( 'ad]ad' ) ).toEqual( 'ad\\]ad' )
  })

  it( 'escapes regular expression character {', () => {
    expect( escapeRegExp( 'ad{ad' ) ).toEqual( 'ad\\{ad' )
  })

  it( 'escapes regular expression character }', () => {
    expect( escapeRegExp( 'ad}ad' ) ).toEqual( 'ad\\}ad' )
  })

  it( 'escapes regular expression character |', () => {
    expect( escapeRegExp( 'ad|ad' ) ).toEqual( 'ad\\|ad' )
  })

})
