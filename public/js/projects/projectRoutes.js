var projectController = require('./projectController.js');

module.exports = function (app, router) {
  //Router routing to the controller
  router
    .post('/', projectController.postProject)
    .get('/:id', projectController.getProject)
   
}

// api/projects/ POST 
// {
// 	"name": "PorterAndTomb",

// }

// api/projects/:projectid GET 
// {
// 	"name": "PorterAndTomb",
// 	"id": 345642164,
// 	"files": [
// 		{
// 			"name": "index.html",
// 			"path": "/",
// 			"id"
// 		},
// 		{
// 			"name": "index.css",
// 			"path": "/css",
// 			"id"
// 		}
// 	]
// }


// api/files/ POST 
// {
//   var File = function(data) {
//   this.name = m.prop(data.name || '');
//   this.path = m.prop(data.path || '');
//   this.body = m.prop(data.body || '');
//   this.firebase = m.prop(data.firebase || '');
//   this.type = m.prop(data.type || '');
//   this.projectId
// };

// }

// api/files/:fileid GET 
// {
//   var File = function(data) {
//   this.name = m.prop(data.name || '');
//   this.path = m.prop(data.path || '');
//   this.body = m.prop(data.body || '');
//   this.firebase = m.prop(data.firebase || '');
//   this.type = m.prop(data.type || '');
//   this.projectId
// };
