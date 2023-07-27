const connectDB = require('./database/database')
const usersRouter = require('./route/users')
const addYourOwnRecipeRouter = require('./route/addYourOwnRecipe')


const express = require('express')

const app = express()


const cors = require('cors')
app.use(cors({
    origin: '*'
}))

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT

app.use(express.json())

app.use('/users', usersRouter)
app.use('/recipes', addYourOwnRecipeRouter)

app.get('/', (req, res) => {
    // console.log('Api is running fine!')
    res.send('Hello from the Server!')
})

app.listen(PORT, async () => {
    try {
        await connectDB()
        console.log(`Server is running at port ${PORT}`)
    }
    catch (err) {
        console.log(`Error in the server ${err}`)
    }
})