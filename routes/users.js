const Router = require('koa-router')
const { User } = require('../models/yy_user.js')

const router = new Router({
  prefix: '/user'
})
router.post('/', async (ctx, next) => {
  try {
      const { size = 10, page = 1, ...arguments } = ctx.request.body
      let d = await User.getData(size, page,arguments)
      ctx.body = await new global.errs.Success(d)
  } catch (e) {
      ctx.body = e || []
  }
})
router.post('/register', async (ctx, next) => {
  const { nickname, mobile, password } = ctx.request.body
  try {
    await ctx.check('mobile', '手機號格式不正確').isMobile()
    var errors = ctx.validationErrors();
    if (errors) {
      return ctx.body = new global.errs.ParameterException(errors)
    }
    let d = await User.createAccount(nickname, mobile, password)
    ctx.body = new global.errs.Success(d)
  } catch (e) {
    ctx.body = e
  }
})
router.post('/login', async (ctx, next) => {
  const { mobile, password } = ctx.request.body
  await ctx.check('mobile', '手機號不能为空').notEmpty()
  await ctx.check('password', '密碼不能为空').notEmpty()

  var errors = ctx.validationErrors();
  if (errors) {
    return ctx.body = new global.errs.ParameterException(errors)
  }
  try {
    let d = await User.verifyPasswords(mobile, password)
    ctx.body = new global.errs.Success(d, '登錄成功')
  } catch (e) {
    ctx.body = e
  }
})

module.exports = router