const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment_id: String,
  user_id: String,
  rating: String,
  hours: Int32,
  date: String,
  helpful_unhelpful: Boolean,
  pictures: String
});

// compile model from schema
module.exports = mongoose.model("comment", CommentSchema);
