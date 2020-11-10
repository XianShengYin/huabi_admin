const Mock = require('mockjs')

const blogs = app => {
  app.get('/mock/api/blogs', function (req, res) {
    const blogs = []
    for (let i = 0; i < 10; i++) {
      blogs.push(Mock.mock({
        id: '@increment',
        timestamp: +Mock.Random.date('T'),
        author: '@first',
        reviewer: '@first',
        title: '@title(5, 10)',
        content_short: 'mock data',
        content: '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
        forecast: '@float(0, 100, 2, 2)',
        importance: '@integer(1, 3)',
        'type|1': ['CN', 'US', 'JP', 'EU'],
        'status|1': ['published', 'draft'],
        display_time: '@datetime',
        comment_disabled: true,
        pageviews: '@integer(300, 5000)',
        image_uri: 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
        platforms: ['a-platform']
      }))
    }
    res.json({
      code: 20000,
      msg: '',
      data: blogs
    })
  })
}

const blogTypes = app => {
  app.get('/mock/api/blogTypes', function (req, res) {
    const blogTypes = []
    for (let i = 0; i < 10; i++) {
      blogTypes.push(Mock.mock({
        id: '@increment',
        timestamp: +Mock.Random.date('T'),
        author: '@first',
        title: '@title(5, 10)',
        'type|1': ['CN', 'US', 'JP', 'EU'],
        'status|1': ['published', 'draft'],
        display_time: '@datetime',
        comment_disabled: true
      }))
    }
    res.json({
      code: 20000,
      msg: '',
      data: blogTypes
    })
  })
}

module.exports = [blogs, blogTypes]
