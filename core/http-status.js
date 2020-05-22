

class HttpException extends Error {
    constructor(msg = '服务器异常', errorCode = '10000', code = 400) {
        super()
        this.errorCode = errorCode;
        this.msg = msg
    }
}
// 匹配错误
class ParameterException extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.msg = msg || '参数错误'
        this.errorCode = 10000
    }
}

class Success extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.msg = msg || 'ok'
        this.errorCode = 200
    }
}
// 查找不存在
class NotFound extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.msg = msg || 'ok'
        this.errorCode = errorCode || 404
    }
}

class AuthFailed extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.msg = msg || '授权失败'
        this.errorCode = errorCode || 10004
    }
}

class Forbbiden extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.msg = msg || '禁止访问'
        this.errorCode = errorCode || 10006
    }
}
module.exports = {
    HttpException,
    ParameterException,
    Success,
    NotFound,
    AuthFailed,
    Forbbiden
}
