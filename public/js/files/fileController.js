var File = require('./fileModel.js');

module.exports = {
  postFile: function(request, response, next) {
    var params = {
      name: request.body.name,
      path: request.body.path,
      body: request.body.body,
      firebase: request.body.firebase,
      type: request.body.type,
      project_id: request.body.project_id
    };

    File.prototype.createFile(params, function(err, results) {
      if (!err) {
        response.status(200).send(results);
      } else {
        response.status(400).send('error inserting file into database');
      }
    })

  },

  getFile: function(request, response, next) {
    var fileId = request.params.id;

    File.prototype.fetchFile(fileId, function(err, results) {
      if (!err) {
        response.status(200).send(results);
      } else {
        response.status(400).send('error: file does not exist in database');
      }
    })
},

};