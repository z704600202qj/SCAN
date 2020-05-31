const jwt = require('jsonwebtoken')
const generateToken = function(username, userid){
    const secretKey = global.config.security.secretKey
    const expiresIn = global.config.security.expiresIn
    const token = jwt.sign({
        username,
        userid
    },secretKey,{
        expiresIn
    })
    return token
}

module.exports = {
    generateToken,
}
