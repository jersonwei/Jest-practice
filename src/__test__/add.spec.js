const add = require('../add')

//  测试单元
describe('测试Add函数',() => {

    test('add(1,3) === 4',() => {

        expect(add(1,3)).toBe(4)

    })

    test('add(1,NAN => NaN',() => {
        
        expect(add(1,NaN)).toBe(NaN)
    })
})