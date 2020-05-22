const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const InitManager = require('./core/init')
const validator = require('./core/validator')

// error handler
onerror(app)

// middlewares
app.use(bodyparser())
app.use(json())
app.use(validator())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

InitManager.initCode(app)

// // error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app