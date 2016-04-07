var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
  name: {type: String},
  tag_line: {type: String},
  description: {type: String},
  logo_url: {type: String},
  created_at: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('project', projectSchema);