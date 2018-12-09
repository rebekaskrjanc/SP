var mongoose = require('mongoose');

var lokacijeShema = new mongoose.Schema({
  naziv: {type: String, required: true},
  naslov: String,
  ocena: {type: Number, "default": 0, min: 0, max: 5},
  lastnosti: [String],
  koordinate: {type: [Number], index: '2dsphere'}
});