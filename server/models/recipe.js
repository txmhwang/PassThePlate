const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
    id: String,
    name: String,
    ingredients: [{ingredient: String, quantity: Int32}],
    instructions: [String],
    public: Boolean,
    pictures: String,
    comments: [String]
});

// compile model from schema
module.exports = mongoose.model("user", RecipeSchema);
