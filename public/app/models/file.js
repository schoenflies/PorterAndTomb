var db = require('../db/config');
var Project = require('./project.js')

var Click = db.Model.extend({
  tableName: 'files',
  hasTimestamps: true,
  project: function() {
    return this.belongsTo(Project, 'project_id');
  }
});

module.exports = File;