const Router = require('koa-router')

const Goods = require('../models/yy_goods.js')
const router = new Router({
    prefix: '/goods_facility'
})
router.post('/', async (ctx, next) => {
    const { size,page,...arg } = ctx.request.body

    try {
        let d = await Goods.getData( size,page,arg )
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e || []
    }
})
module.exports = router
