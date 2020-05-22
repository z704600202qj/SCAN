const jwt = require('jsonwebtoken')
const generateToken = function(username, password){
    const secretKey = global.config.security.secretKey
    const expiresIn = global.config.security.expiresIn
    const token = jwt.sign({
        username,
        password
    },secretKey,{
        expiresIn
    })
    return token
}

module.exports = {
    generateToken,
}
