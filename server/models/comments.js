const mongoose = require("mongoose");

//define a story schema for the database
const CommentSchema = new mongoose.Schema({
  comment_id: String,
  creator_id: String,
  creator_name: String,
  content: String,
  rating: Number,
  hours: Number,
  helpful: Boolean,
  pictures: String,
});

// compile model from schema
module.exports = mongoose.model("recipe", CommentSchema);
