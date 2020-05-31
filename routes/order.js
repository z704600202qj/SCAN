const Router = require('koa-router')
const Order = require('../models/yy_order.js')
const {Auth}=require('../core/auth.js')

const router = new Router({
    prefix: '/order'
})

router.post('/create',new Auth().levels, async (ctx, next) => {
    const { title, content, } = ctx.request.body
    try {
        let d = await Order.createData(title,content)
        ctx.body =await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/list', async (ctx, next) => {
    const { size = 10, page = 1, ...arguments } = ctx.request.body
    let data = await Order.List(size, page,arguments)
    ctx.body = new global.errs.Success(data)
})
router.post('/detail', async (ctx, next) => {
    const { id } =  ctx.request.body
    let data = await Order.detail(id)
    ctx.body = new global.errs.Success(data)
})
module.exports = router
