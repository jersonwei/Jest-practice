const {generateDiv} = require('../dom')
require('../jsdom-config')
it('Dom测试',() => {

    generateDiv()
    expect(document.getElementsByClassName('c1').length).toBe(1)
})