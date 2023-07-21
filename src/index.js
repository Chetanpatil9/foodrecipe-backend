const mongoose = require("mongoose")
const express = require("express");
const app = express();
const cors = require("cors")
const {router} = require("../src/routes/user")
const {reciperouter} = require("./routes/Recipes")

app.use(cors({ origin: "*" }))
app.use(express.json())
app.use("/auth", router)
app.use("/recipes", reciperouter)

mongoose.connect("mongodb+srv://chetanpatil22:chetan2222@cluster0.oxcicvd.mongodb.net/food-recipe-app?retryWrites=true&w=majority",                        
    {
        useNewUrlparser: true,
        useUnifiedTopology: true,
    })
app.get("/", (req, res) => {
    res.send("working")
})
app.listen(4000, () => console.log("Server Started"));