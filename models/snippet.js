const mongoose = require('mongoose');
  const Schema  = mongoose.Schema;



const snippetSchema = new Schema({
  snippet: String,
  level: String,
}, { timestamps: true });
    

module.exports  = mongoose.model('Snippet', snippetSchema);
