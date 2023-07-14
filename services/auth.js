const JWT = require('jsonwebtoken')
const secretKey = 'qw#er@ty';


const createTokenForUser = (user) => {
    const payload = {
        _id: user._id,
        email: user.email
    }

    const token = JWT.sign(payload, secretKey)

    return token;
}

const validateToken = (token) => {
    const payload = JWT.verify(token, secretKey)

    return payload;

}

module.exports = {
    createTokenForUser,
    validateToken
}