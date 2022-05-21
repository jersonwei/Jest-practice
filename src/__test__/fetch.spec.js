const {getData} = require('../fetch')
const axios = require('axios')

jest.mock('axios')

it('测试fetch',async ()=>{
    axios.get.mockResolvedValueOnce('abc')
    axios.get.mockResolvedValueOnce('bcd')
    const res1 = await getData()
    const res2 = await getData()
    expect(res1).toBe('abc')
    expect(res2).toBe('bcd')

})