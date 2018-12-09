var mongoose = require('mongoose');
var User = mongoose.model('User');

var vrniJsonOdgovor = function(odgovor, status, vsebina) {
  odgovor.status(status);
  odgovor.json(vsebina);
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