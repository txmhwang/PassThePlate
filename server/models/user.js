const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  friends: [String],
  your_recipes: [String],
  saved_recipes: [String],
  email: String,
  password: String,
  pfp: String,
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
