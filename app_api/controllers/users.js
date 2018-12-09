var mongoose = require('mongoose');
var User = mongoose.model('User');

var vrniJsonOdgovor = function(res, status, data) {
  res.status(status);
  res.json(data);
};

module.exports.getUsers = function(req, res) {
  User
    .find()
    .exec(function(error, users){
      if(error) {
        vrniJsonOdgovor(res, 500, error);
        return;
      } else {
        vrniJsonOdgovor(res, 200, users);
      }
    });
};

module.exports.createUser = function(req, res) {
  User.create({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    email: req.body.email,
    state: req.body.state,
    gender: req.body.gender,
    dance: req.body.dance

  }, function(error, user) {
    if (error) {
      vrniJsonOdgovor(res, 400, error);
    } else {
      vrniJsonOdgovor(res, 201, user);
    }
  });
};