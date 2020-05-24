class HttpException extends Error {
    constructor(msg = '服务器异常', code = 200) {
        super()
        this.code = code;
        this.msg = msg;
        this.data = {}
    }
}
// 匹配错误
class ParameterException extends HttpException {
    constructor(msg, code) {
        super()
        this.msg = msg || '参数错误'
        this.code = 10000
    }
}

class Success extends HttpException {
    constructor(data,msg) {
        super()
        this.msg = msg || '操作成功'
        this.code = 200
        this.data = data
    }
}
// 查找不存在
class NotFound extends HttpException {
    constructor(msg, code) {
        super()
        this.msg = msg || 'ok'
        this.code = code || 404
    }
}

class AuthFailed extends HttpException {
    constructor(msg, code) {
        super()
        this.msg = msg || '授权失败'
        this.code = code || 10004
    }
}

class Forbbiden extends HttpException {
    constructor(msg, code) {
        super()
        this.msg = msg || '禁止访问'
        this.code = code || 10006
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