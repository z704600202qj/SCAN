const Router = require('koa-router')
const {User} = require('../models/yy_user.js')

const router = new Router({
  prefix: '/users'
})


router.post('/register', async (ctx, next) => {
  const {
    nickname,
    mobile,
    password
  } = ctx.request.body
  let d = await User.createAccount(nickname, mobile,password)
  ctx.body = new global.errs.Success(d)
})
router.post('/login', async (ctx, next) => {
  const {mobile,password} = ctx.request.body
  let d = await User.verifyPassword(mobile, password)
  ctx.body = new global.errs.Success(d)
})

module.exports = router