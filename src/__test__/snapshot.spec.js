const {generateDiv} = require('../dom')
require('../jsdom-config')

test('Dom的快照测试',() => {
    generateDiv()  
    expect(document.getElementsByClassName('c1')).toMatchSnapshot()
})