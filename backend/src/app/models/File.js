const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  name: {
  	type: String,
  	required: true
  },
  path: {
  	type: String,
  	required: true
  }
});

module.exports = mongoose.model('File', FileSchema);