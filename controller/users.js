const { usersModel } = require('../model/users')
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const secretKey = 'chetanhake';
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
    const userInfo = req.body

    const existingUser = await usersModel.findOne({ email: userInfo.email })
    if (existingUser !== null) {
        return res.send('User already registered Please try to login')
    }
    const hashedPassword = bcrypt.hashSync(userInfo.password, saltRounds)
    userInfo.password = hashedPassword

    const data = await usersModel.create(userInfo)
    console.log(data)
    return res.send('User Registered Successfully')

}

const login = async (req, res) => {
    const loginInfo = req.body

    const isUser = await usersModel.findOne({ email: loginInfo.email })
    if (isUser == null) {
        return res.send('User is not registered Register first')
    }
    const checkUser = bcrypt.compareSync(loginInfo.password, isUser.password)
    if (checkUser) {
        const token = await jwt.sign({ email: isUser.email }, secretKey, { expiresIn: '2h' })
        return res.send({ email: loginInfo.email, token: token, message: 'User logged in successfully' })
    }
    return res.send('Password does not match Try entering the correct password')
}

module.exports = { register, login }