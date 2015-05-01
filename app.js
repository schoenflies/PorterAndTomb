var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Define main route
app.use(express.static(__dirname + '/public'));

// Define rooms - key === roomname, value === {socket.username, ...}
var rooms = {};

// Define message listeners
io.on('connection', function(socket) {
  console.log('connection from: ', socket.handshake.address);

  socket.on('req room list', function() {
    socket.emit('room list', rooms);
  });

  socket.on('join room', function(data) {
    socket.room = data.roomname;
    socket.username = data.username;
    rooms[socket.room][socket.username] = true;
    socket.emit('room list', rooms);
  });

  socket.on('disconnect', function() {
    if (socket.room !== undefined)
      delete rooms[socket.room][socket.username];
  });
});

http.listen(8080, function() {
  console.log('listening on *:8080');
});
