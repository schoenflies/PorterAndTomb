var projectController = require('./projectController.js');

module.exports = function (app, router) {
  //Router routing to the controller
  router
    .post('/', projectController.postProject)
    .get('/', projectController.getProject)
   
}