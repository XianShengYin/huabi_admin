// https://juejin.im/post/6844904148081573895
const fs = require('fs')
const path = __dirname
// The readdirSync method returns an array object containing the names of all the files in the specified directory
const files = fs.readdirSync(path + '/mockList')
const mockList = []
files.forEach(filename => {
  const model = require('./mockList/' + filename)
  mockList.push(...model)
})

function handleMock(app) {
  mockList.forEach(func => {
    func(app)
  })
}

module.exports = handleMock
