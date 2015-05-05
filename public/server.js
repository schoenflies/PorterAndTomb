// silly chrome wants SSL to do screensharing
var fs = require('fs'),
    express = require('express'),
    https = require('https'),
    http = require('http'),
    path = require('path');

// var privateKey = fs.readFileSync('fakekeys/privatekey.pem').toString(),
//     certificate = fs.readFileSync('fakekeys/certificate.pem').toString();


var app = express();

app.use(express.static(__dirname));

// https.createServer({key: privateKey, cert: certificate}, app).listen(8000);
http.createServer(app).listen(8000);

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/editor', function(req, res){
  res.sendFile(path.join(__dirname+'/editor.html'));
});

console.log('running on http://localhost:8000');
