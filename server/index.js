const jsonServer = require('json-server')
const server = jsonServer.create()
const middleWares = jsonServer.defaults()
const connection = require('./mysql')

server.use(middleWares)
server.use(jsonServer.bodyParser)

server.get('/api', function(req, res, next) {
  const data = {
    data: {},
    code: 200,
    status: 'OK'
  }
  res.send(data)
})

server.get('/sqltest', function(req, res, next) {
  connection.query('SELECT * FROM feed', function (error, data, fields) {
    if (error) throw error
    console.log(data[0])
    res.send(data[0])
  })
})
server.get('/feed/data', function(req, res, next) {
  connection.query('SELECT * FROM feed', function (error, result, fields) {
    if (error) throw error
    console.log(result)
    const data = {
      data: result,
      code: 200,
      status: 'OK'
    }
    res.send(data)
  })
})
server.post('/feed/create', function(req, res, next) {
  const data = {
    data: {
      newsid: req.body.newsid,
      topic: req.body.topic,
      description: req.body.description,
    },
    code: 200,
    status: 'ADDED'
  }
  res.send(data)
})
server.post('/feed/update', function(req, res, next) {
  const data = {
    data: {
      newsid: req.body.newsid,
      topic: req.body.topic,
      description: req.body.description,
    },
    code: 300,
    status: 'UPDATE'
  }
  res.send(data)
})
server.post('/feed/delete', function(req, res, next) {
  const data = {
    data: {
      newsid: req.body.newsid
    },
    code: 200,
    status: 'DELETE'
  }
  console.log(data)
  res.send(data)
})


server.listen(3001, () => {
  console.log('JSON Server is running...')
})