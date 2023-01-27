const mongoose = require("mongoose");

//define a story schema for the database
const RecipeSchema = new mongoose.Schema({
  recipe_id: String,
  creator_id: String,
  creator_name: String,
  name: String,
  ingredients: String,
  instructions: String,
  // ingredients: {name: String, quantity: Number, unit: String},
  // instructions: [String],
  public: Boolean,
  // pictures: String,
});

// compile model from schema
module.exports = mongoose.model("recipe", RecipeSchema);
