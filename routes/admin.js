const Router = require('koa-router')
const admin = require('../models/yy_admin.js')

const router = new Router({
  prefix: '/admin'
})
router.post('/register', async (ctx, next) => {
    const { username, mobile, password } = ctx.request.body
    let d = await User.createAccount(nickname, mobile, password)
    ctx.body = new global.errs.Success(d)
  })