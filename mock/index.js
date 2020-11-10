// https://juejin.im/post/6844904148081573895
const fs = require('fs')
const path = __dirname
// readdirSync() 方法将返回一个包含指定目录下所有文件名称的数组对象。
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
