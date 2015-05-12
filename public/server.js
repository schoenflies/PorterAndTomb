/**
 * @file Backend server for api endpoints
 *
 * @param {Object} fs [node fs module]
 * @param {Object} express [node express module]
 * @param {Object} http [node http module]
 * @param {Object} path [node path module]
 */

var fs = require('fs'),
    express = require('express'),
    http = require('http'),
    path = require('path');

//Instantiate express instance
var app = express();

//Mount static directory middleware
app.use(express.static(__dirname));

//Create server
http.createServer(app).listen(8000);

//API for serving index.html when page initially loads
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'));
});



