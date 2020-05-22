const basicAuth = require('basic-auth')
const jwt = require('jsonwebtoken')

class Auth {
    constructor(level) {
    }
    get levels() {
        return async (ctx, next) => {
            const token = ctx.get('Authorization') // 获取请求 Header 中 Authorization 值
            console.log(global.config.security.secretKey)
            let errMsg = 'token不合法'
            if (!token) {
                ctx.body = new global.errs.Forbbiden('未登陆')
            }
            try {
                var decode =await jwt.verify(token.split(' ')[1], global.config.security.secretKey)
                console.log(1234, decode)
                ctx.auth = {
                    uid: decode.uid,
                    scope: decode.scope
                }
            await next()
            } catch (error) {
                if (error.name == 'TokenExpiredError') {
                    errMsg = 'token已过期'
                }
                if (error.name == 'JsonWebTokenError') {
                    errMsg = '伪造/无效的token'
                }
                ctx.body = new global.errs.Forbbiden(errMsg)
                console.log(333)
                await next()


            }

            // uid,scope

        }
    }
}
module.exports = {
    Auth
}