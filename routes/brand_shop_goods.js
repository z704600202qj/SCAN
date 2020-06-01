const Router = require('koa-router')
const brand_shop_goods = require('../models/yy_brand_shop_goods.js')

const router = new Router({
    prefix: '/brand_shop_goods'
})
router.post('/', async (ctx, next) => {
    try {
        const { size = 10, page = 1, ...arguments } = ctx.request.body
        let d = await brand_shop_goods.getData(size, page, arguments)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e || []
    }
})
router.post('/detail', async (ctx, next) => {
    const { id } = ctx.request.body
    let data = await brand_shop_goods.detail(id)
    ctx.body = new global.errs.Success(data)
})
router.post('/create', async (ctx, next) => {
    const { bid, ...arg } = ctx.request.body
    try {
        let d = await brand_shop_goods.createData(bid,arg)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})

router.post('/del', async (ctx, next) => {
    const { bsid } = ctx.request.body
    try {
        let d = await brand_shop_goods.delData(bsid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/edit', async (ctx, next) => {
    const { bsid, ...arg } = ctx.request.body
    try {
        let d = await brand_shop.editData(bsid, arg)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})


module.exports = router