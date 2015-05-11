var mongoose = require('mongoose');
// var Promise = require('bluebird');

var projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  file_ids: {
    type: String,
    required: true
  },

});

var Project = mongoose.model('projects', projectSchema);

// User.prototype.createUser = function (params, callback){
//   // console.log('PARAMS FROM USER.MODEL.createUser'+JSON.stringify(params));
//   bcrypt.hash(params.password, null, null, function(err, hash){
//     if(hash) {
//       var newUser = new User({
//         username: params.username,
//         hashword: hash,
//         following: params.following
//       });

//       newUser.save(function(err,results){
//         // console.log("mongoose.save: ", err, results);
//         callback(err, results);
//       });  
//     } else {
//       callback(err);
//     }
//   });
// };

// User.prototype.signin = function (username, password, callback){
//   //find if user exists
//   User.findOne({'username':username},function(err,user){
//     //if exists, compare password
//     // console.log(err, JSON.stringify(user));
//     if(user){
//       //if correct, return following
//       bcrypt.compare(password, user.hashword, function(err, res) {
//         if (res) {
//           callback(null, user.following);  
//         } else {
//           //if not correct, do stuff w/ error
//           callback('Incorrect password', null);  
//         }
//       });
//     } else {
//       //if not correct, do stuff w/ error
//       callback('Username not found', null);
//     }
//   });  
// };

// User.prototype.updateFollowing = function (username, following, callback){
//   // console.log(username, following);

//   //Look up user entry with 
//   User.findOne({username: username}, function(err, user) {
//     // console.log("updateFollowing: ", err, user);
//     user.following = following;
//     user.save();
//     callback(err);
//   });
// };

module.exports = Project;