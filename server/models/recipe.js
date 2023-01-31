const mongoose = require("mongoose");

//define a story schema for the database
const RecipeSchema = new mongoose.Schema({
  recipe_id: String,
  creator_id: String,
  creator_name: String,
  name: String,
  ingredients: String,
  instructions: String,
  public: Boolean,
  picture: String,
});

// compile model from schema
module.exports = mongoose.model("recipe", RecipeSchema);
