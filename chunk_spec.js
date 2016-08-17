describe( 'chunk', () => {

  it( 'splits an array to specidied "chunks" ', () => {
    expect( chunk( [1,2,3,4] 2 ) ).toBe( [1,2]] [3.4] )
  })
  it( 'returns nothing if no array or "chunk" is specified ', () => {
    expect( chunk() ).toBe()
  })