var Bookshelf = require('bookshelf');
var path = require('path');

var db = Bookshelf.initialize({
  client: 'sqlite3',
  connection: {
    host: '127.0.0.1',
    user: 'your_database_user',
    password: 'password',
    database: 'porterandtomb',
    charset: 'utf8',
    filename: path.join(__dirname, './porterandtomb.sqlite')
  }
});


/************************************************************/
// Define schemas
/************************************************************/

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username', 255);
      user.varchar('password', 255);
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table: users', table);
    });
  }
});

db.knex.schema.hasTable('projects').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('projects', function (project) {
      project.increments('id').primary();
      project.string('projectname', 255);
      link.timestamps();
    }).then(function (table) {
      console.log('Created Table: projects', table);
    });
  }
});

db.knex.schema.hasTable('files').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('files', function (file) {
      file.increments('id').primary();
      file.string('filename', 255);
      file.text('data');
      link.timestamps();
    }).then(function (table) {
      console.log('Created Table: files', table);
    });
  }
});

module.exports = db;