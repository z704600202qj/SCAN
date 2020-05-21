const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManager {
    static initCode(app) {
        InitManager.app = app
        InitManager.initLoadRouters()
        InitManager.loadHttpException()
        InitManager.initConfig()
    }

    static initConfig(path = '') {
        const configPath = path || process.cwd() + '/config/index.js'
        global.config = require(configPath)
    }

    static initLoadRouters() {
        const path = `${process.cwd()}/routes`
        requireDirectory(module, path, { visit: whenLoadFile })

        function whenLoadFile(obj) {
            if (obj instanceof Router) {
                InitManager.app.use(obj.routes())
            }
        }
    }

    static loadHttpException() {
        global.errs = require('./http-status')
    }

}

module.exports = InitManager
