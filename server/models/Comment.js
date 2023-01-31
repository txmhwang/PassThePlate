const mongoose = require("mongoose");

//define a story schema for the database
const CommentSchema = new mongoose.Schema({
  parent: String,
  creator_id: String,
  creator_name: String,
  content: String,
  rating: String,
  hours: String,
});

// compile model from schema
module.exports = mongoose.model("comment", CommentSchema);
