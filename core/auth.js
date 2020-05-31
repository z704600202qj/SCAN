const basicAuth = require('basic-auth')
const jwt = require('jsonwebtoken')

class Auth {
    constructor(level) {}
    get levels() {
        return async (ctx, next) => {
            const token = ctx.get('Authorization') // 获取请求 Header 中 Authorization 值
            let errMsg = 'token不合法'
            if (!token) {
             errMsg = '未登陆'
            }
            try {
                var decode = await jwt.verify(token.split(' ')[1], global.config.security.secretKey)
                ctx.auth = {
                    username: decode.username,
                    userid: decode.userid,
                }
                await next()
            } catch (error) {
                if (token&&error.name == 'TokenExpiredError') {
                    errMsg = 'token已过期'
                }
                if (token&&error.name == 'JsonWebTokenError') {
                    errMsg = '伪造/无效的token'
                }
                ctx.body = await new global.errs.Forbbiden(errMsg)
            }
        }
    }
}
module.exports = {
    Auth
}