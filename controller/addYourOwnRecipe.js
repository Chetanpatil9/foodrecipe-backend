const { addYourOwnRecipeModel } = require('../model/addYouOwnRecipe')

const addYourOwnRecipe = async (req, res) => {
    const addYouOwnRecipeInfo = req.body
    const data = await addYourOwnRecipeModel.create(addYouOwnRecipeInfo)
    res.send({ message: "Your Recipe Added Successfully" })
}

const getYourOwnRecipe = async (req, res) => {
    const data = await addYourOwnRecipeModel.find({})
    res.send(data)
}

module.exports = { addYourOwnRecipe, getYourOwnRecipe }