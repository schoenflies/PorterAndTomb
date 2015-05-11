var Project = require('./ProjectModel.js');

module.exports = {
  postProject: function(request, response, next) {
    response.send('inside postProject controller');
    
  },

  getProject: function(request, response, next) {
    response.send('inside getProject controller');
  },

};