const mongoose = require('mongoose');
  const Schema  = mongoose.Schema;



const snippetSchema = new Schema({
  level: String,
  snippet: String,
  code: String,
}, { timestamps: true });
    

module.exports  = mongoose.model('Snippet', snippetSchema);
