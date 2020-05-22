const Router = require('koa-router')
const { User } = require('../models/yy_user.js')

const router = new Router({
  prefix: '/users'
})


router.post('/register', async (ctx, next) => {
  const { nickname, mobile, password } = ctx.request.body
  let d = await User.createAccount(nickname, mobile, password)
  ctx.body = new global.errs.Success(d)
})
router.post('/login', async (ctx, next) => {
  const { mobile, password } = ctx.request.body
  await ctx.checkBody({
    mobile: {
      notEmpty: {
        options: [true],
        errorMessage: 'mobile 不能为空',
      },
    },
    password: {
      notEmpty: {
        options: [true],
        errorMessage: 'password 不能为空',
      },
    }
  })
  var errors = ctx.validationErrors();
  if (errors) {
   return ctx.body = new global.errs.ParameterException(errors)
  }
  let d = await User.verifyPasswords(mobile, password)
  ctx.body = new global.errs.Success(d)
})

module.exports = router