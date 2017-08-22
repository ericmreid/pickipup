const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
  name: String,
}, { timestamps: true });

const Picture = mongoose.model('Picture', pictureSchema);

module.exports = Picture;
