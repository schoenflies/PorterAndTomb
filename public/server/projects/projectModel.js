var mongoose = require('mongoose');
var File = require('../files/fileModel.js');

var projectSchema = mongoose.Schema({
  name: String
});

var Project = mongoose.model('projects', projectSchema);

Project.prototype.createProject = function(name, callback) {
  console.log(name);

  var newProject = new Project({
    name: name,
  });

  newProject.save(function(err, results) {
    callback(err, results);
  });

};

Project.prototype.fetchProject = function(projectId, callback) {
  //find project
  Project.findOne({ _id: projectId }, function(err, project) {

    if (!err) {

      //find files with projectId
      var fileMap = [];
      File.find({}, function(err, files) {
        if (!err) {
          files.forEach(function(file) {
            if (String(file.project_id) === String(projectId)) {
              fileMap.push({
                _id: file._id,
                name: file.name,
                path: file.path
              });
            }
          })
        }

        //create project object to send to client
        var projectMap = {
          _id: project._id,
          name: project.name,
          files: fileMap
        }
        callback(err,projectMap);
      }) 
    } else {
      callback(err);
    }
  });

};

module.exports = Project;