const secretkey = 'chetanhake';
const jwt = require('jsonwebtoken');

const verifyUser = (req, res, next) => {
    const bearerToken = req.headers['authorization']
    if (bearerToken === undefined) {
        res.send('Unauthorized Person')
    }
    const token = bearerToken.split(' ')[1]
    jwt.verify(token, secretkey);
    next();
}

module.exports = verifyUser;