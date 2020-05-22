const Router = require('koa-router')

const Admin = require('../models/yy_admin.js')

const router = new Router({
  prefix: '/admin'
})
router.post('/register', async (ctx, next) => {
  const { username, password } = ctx.request.body
  let d = await Admin.createAccount(username, password)
  ctx.body = new global.errs.Success(d)
})
router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body
  await ctx.checkBody({
    username: {
      notEmpty: {
        options: [true],
        errorMessage: 'username 不能为空',
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
  let d = await Admin.verifyPasswords(username, password)
  ctx.body = new global.errs.Success(d)
})
module.exports = router
