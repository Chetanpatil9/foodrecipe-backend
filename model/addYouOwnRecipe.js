const mongoose = require('mongoose')

const addYourOwnRecipeSchema = new mongoose.Schema({
    recipeTitle: String,
    recipeDescription: String,
    recipeCategory: String,
    recipePrepTime: Array,
    recipeCookTime: Array,
    recipeServes: String,
    recipeIngredients: String,
    recipeDirections: String,
    recipeSaveRecipeAs: String
})

const addYourOwnRecipeModel = mongoose.model('addYourOwnRecipe', addYourOwnRecipeSchema)

module.exports = { addYourOwnRecipeModel }