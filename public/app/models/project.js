var db = require('../db/config');
var File = require('./file');
var crypto = require('crypto');

var Project = db.Model.extend({
  tableName: 'projects',
  hasTimestamps: true,
  defaults: {
    
  },
  user: function() {
    return this.belongsTo(User, 'user_id');
  }
  files: function() {
    return this.hasMany(File);
  },
  initialize: function(){
  }
});

module.exports = Project;