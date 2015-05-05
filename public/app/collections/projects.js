var db = require('../db/config');
var Project = require('../models/project');

var Projects = new db.Collection();

Project.model = Link;

module.exports = Projects;
