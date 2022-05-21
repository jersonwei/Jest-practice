const delay =  require("../delay");

it('异步测试',done => {
    let num = 1
    let execu = false
    // 提高异步函数的执行效率
    jest.useFakeTimers()
    delay(() => {
        done()
        num++
        if(num===2){
            return (execu = true)
        }
    })
    jest.runAllTimers()
    expect(true).toBe(true)
})

it('异步测试',done => {
    let mockFn = jest.fn()
    jest.useFakeTimers()
    delay(() => {
        mockFn()
        mockFn()
        done()
    })
    jest.runAllTimers()
    expect(mockFn).toBeCalled()
    expect(mockFn).toBeCalledTimes(2)
})