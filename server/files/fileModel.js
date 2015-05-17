var mongoose = require('mongoose');

var fileSchema = mongoose.Schema({
  name: String,
  path: String,
  body: String,
  firebase: String,
  type: String,
  project_id: String
});

var File = mongoose.model('files', fileSchema);

File.prototype.createFile = function(params, callback) {

  var newFile = new File({
    name: params.name,
    path: params.path,
    body: params.body,
    firebase: params.firebase,
    type: params.type,
    project_id: params.project_id
  });

  newFile.save(function(err, results) {
    callback(err, results);
  });

};

File.prototype.fetchFile = function(fileId, callback) {

  File.findOne({_id: fileId }, function(err, file) {
    if (!err) {
      callback(err,file);
    } else {
      callback(err);
    }
  });
};

module.exports = File;