const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  contents: String,
  friends: [String],
  your_recipes: [String],
  saved_recipes: [String],
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
