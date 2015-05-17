var Project = require('./ProjectModel.js');

module.exports = {
  postProject: function(request, response, next) {

    Project.prototype.createProject(request.body.name, function(err, results) {
      if (!err) {
        console.log('inserted project into db');
        response.status(200).send(results);
      } else {
        console.log('error inserting into db');
        response.status(400).send(err);
      }
    })

  },

  getProject: function(request, response, next) {
    var projectId = request.params.id;
    
    Project.prototype.fetchProject(projectId, function(err, results) {
      if (!err) {
        response.status(200).send(results);
      } else {
        response.status(400).send('error: project does not exist in database');
      }
    })

  },

};