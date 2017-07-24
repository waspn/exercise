const jsonServer = require('json-server')
const server = jsonServer.create()
const middleWares = jsonServer.defaults()

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

server.get('/feed/data', function(req, res, next) {
  const data = {
    data: [
      {
        "newsid": 1,
        "topic": "Feed Data",
        "description": "Lorem ipsum vi calas opique"
      },
      {
        "newsid": 2,
        "topic": "Feed Dataaa",
        "description": "um vi cLorem ipsiqu alas ope"
      }
    ],
    code: 200,
    status: 'OK'
  }
  res.send(data)
})
server.get('/feed/add', function(req, res, next) {
  const data = {
    data: '',
    code: 200,
    status: 'ADD'
  }
  res.send(data)
})
server.get('/feed/update', function(req, res, next) {
  const data = {
    data: '',
    code: 300,
    status: 'UPDATE'
  }
  res.send(data)
})
server.get('/feed/delete', function(req, res, next) {
  const data = {
    data: '',
    code: 404,
    status: 'DELETE'
  }
  res.send(data)
})


server.listen(3001, () => {
  console.log('JSON Server is running...')
})