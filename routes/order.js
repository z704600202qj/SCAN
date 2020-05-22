const Router = require('koa-router')
const Order = require('../models/yy_order.js')

const router = new Router({
    prefix: '/order'
})
router.post('/list', async (ctx, next) => {
    const { size = 10, page = 1, ...arguments } = ctx.request.body
    let data = await Order.List(size, page,arguments)
    ctx.body = new global.errs.Success(data)
})
router.get('/:id', async (ctx, next) => {
    const { id } = ctx.params
    let data = await Order.detail(id)
    ctx.body = new global.errs.Success(data)
})
module.exports = router
