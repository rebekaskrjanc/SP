/* Vrni stran s podrobnostmi*/
module.exports.informacije = function(req, res) {
  res.render('index', { title: 'Informacije o aplikaciji' });
};
/* Vrni stran Profile */
module.exports.profil = function(req, res) {
  res.render('profil', { title: 'Prikazi profil' });
};
/* Vrni stran Members */
module.exports.members = function(req, res) {
  res.render('members', { title: 'Prikazi profil' });
};
/* Vrni stran Groups */
module.exports.groups = function(req, res) {
  res.render('groups', { title: 'Prikazi profil' });
};
/* Vrni stran Photos */
module.exports.photos = function(req, res) {
  res.render('photos', { title: 'Prikazi profil' });
};
/* Vrni stran Photos */
module.exports.homepage = function(req, res) {
  res.render('homepage', { title: 'Prikazi profil' });
};
/* Vrni stran Photos */
module.exports.comments = function(req, res) { //26 272 lecture udemy
  //res.render('comments', { title: 'Prikazi komentarje' });
  var novKomentar=req.body.vsebinaKomentarja
  res.send("you have reached the post route") 
  res.reload('/comments');
};