
var fs = require('fs'),
    express = require('express'),
    https = require('https'),
    http = require('http'),
    path = require('path');



var app = express();

app.use(express.static(__dirname));

//setup environment port variable
//default to port 4000
var port = process.env.PORT || 4000;
http.createServer(app).listen(port);

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/editor', function(req, res){
  res.sendFile(path.join(__dirname+'/editor.html'));
});

console.log('running on http://localhost:8000');
