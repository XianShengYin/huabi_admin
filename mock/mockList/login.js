const login = app => {
  app.post('/api/login', function(req, res) {
    res.json({
      code: 20000,
      msg: 'SUCCESS',
      data: { name: '尹先生', motto: '你好，陌生人', head: '', token: 'cf460f5779473b38aecf683d5b25f75855e1f43f9aad14777f8822a9daeb7121' }
    })
  })
}

module.exports = [login]
