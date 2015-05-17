var fileController = require('./fileController.js');

module.exports = function (app, router) {
  //Router routing to the controller
  router
    .post('/', fileController.postFile)
    .get('/:id', fileController.getFile)
}