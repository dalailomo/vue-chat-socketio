var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
})

io.on('connection', socket => {
  console.log(`A user connected with socket id ${socket.id}`)

  io.emit('client-connected', socket.id)

  socket.on('get-client-list', data => {
    io.to(socket.id).emit('client-list-given', Object.keys(io.sockets.clients().connected))
  })

  socket.on('disconnect', () => {
    socket.broadcast.emit('client-disconnected', socket.id)
  })

  socket.on('send-message', data => {
    io.to(data.to).emit('message-sent', data)
  })
})

http.listen(3000, () => {
  console.log('Listening on *:3000')
})
