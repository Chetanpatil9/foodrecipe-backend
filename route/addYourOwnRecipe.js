const { addYourOwnRecipe, getYourOwnRecipe } = require('../controller/addYourOwnRecipe')

const express = require('express')
const verifyUser = require('../middleware/middleware')

const addYourOwnRecipeRouter = express.Router()

addYourOwnRecipeRouter.post('/addyourownrecipe', addYourOwnRecipe)
addYourOwnRecipeRouter.get('/getyourownrecipe', getYourOwnRecipe)

module.exports = addYourOwnRecipeRouter