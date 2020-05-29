const Router = require('koa-router')

const Admin = require('../models/yy_admin.js')

const router = new Router({
  prefix: '/admin'
})
router.post('/', async (ctx, next) => {
  try {
    let d = await Admin.getData()
    ctx.body = await new global.errs.Success(d)
  } catch (e) {
    ctx.body = e || []
  }
})
router.post('/edit', async (ctx, next) => {
  try {
    const { aid, password, newpassword } = ctx.request.body
    let d = await Admin.editAccount(aid, password, newpassword)
    ctx.body = await new global.errs.Success(d)
  } catch (e) {
    ctx.body = e || []
  }
})
router.post('/register', async (ctx, next) => {
  const {
    username,
    password
  } = ctx.request.body
  try {
    let d = await Admin.createAccount(username, password)
    ctx.body = new global.errs.Success(d)
  } catch (e) {
    ctx.body = e
  }
})
router.post('/login', async (ctx, next) => {
  const {
    username,
    password
  } = ctx.request.body
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
  try {
    let d = await Admin.verifyPasswords(username, password)
    ctx.body = new global.errs.Success(d, '登錄成功')
  } catch (e) {
    ctx.body = e
  }
})
module.exports = router