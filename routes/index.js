const router = require('koa-router')()
const {Auth}=require('../core/auth.js')

router.get('/string',new Auth().levels, async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
