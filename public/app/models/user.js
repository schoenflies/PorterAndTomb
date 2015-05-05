var db = require('../db/config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var Project = require('./Project');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  projects: function() {
    return this.hasMany(Project);
  },

});

module.exports = User;
