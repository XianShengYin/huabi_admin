const login = app => {
  app.post('/api/login', function(req, res) {
    res.json({
      code: 20000,
      msg: 'SUCCESS',
      data: {
        userInfo: {
          name: '尹先生',
          motto: '你好，陌生人',
          email: '123456789@163.com',
          head: '',
          circleList: [
            { title: 'QQ', icon: 'qq', isPic: 0, content: 'https://qq.com/26320401980' },
            { title: '微信', icon: 'weixin', isPic: 1, content: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' }
          ],
          description: '该如何描述一下我自己呢'
        },
        token: 'cf460f5779473b38aecf683d5b25f75855e1f43f9aad14777f8822a9daeb7121'
      }
    })
  })
}

module.exports = [login]
