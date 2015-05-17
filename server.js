var express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/client'));

var uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/pt';

mongoose.connect(uristring, {}, function(err, res) {
  if (err) {
    console.log('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log('Succeeded connected to: ' + uristring);
  }
});

//Mount body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//Implement routers
var projectRouter = express.Router();
require('./server/projects/projectRoutes.js')(app, projectRouter);

var fileRouter = express.Router();
require('./server/files/fileRoutes.js')(app, fileRouter);

//Establish routes
app.use('/api/projects', projectRouter);
app.use('/api/files', fileRouter);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(4000, function(){
  console.log("Listening on 4000");
});
// console.log('running on http://localhost:8000');