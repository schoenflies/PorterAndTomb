var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Define main route
app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
  //do stuff for a connection here
});

http.listen(8080);
