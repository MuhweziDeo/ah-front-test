const sum =require('./sum')

test('test addition',()=>{
    expect(sum(1,2)).toBe(3)
})