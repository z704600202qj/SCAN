const Router = require('koa-router')
const brand = require('../models/yy_brand.js')

const router = new Router({
    prefix: '/brand'
})
router.post('/', async (ctx, next) => {
    try {
        const { size = 10, page = 1, ...arguments } = ctx.request.body
        let d = await brand.getData(size, page, arguments)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e || []
    }
})
router.post('/detail', async (ctx, next) => {
    try {
        const { bid } = ctx.request.body
        let d = await brand.getDetail(bid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e || []
    }
})
router.post('/create', async (ctx, next) => {
    const { brand_name, ...arg } = ctx.request.body
    try {
        let d = await brand.createData(brand_name,arg)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})

router.post('/del', async (ctx, next) => {
    const { bid } = ctx.request.body
    try {
        let d = await brand.delData(bid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/edit', async (ctx, next) => {
    const { bid, ...arg } = ctx.request.body
    try {
        let d = await brand.editData(bid, arg)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/status', async (ctx, next) => {
    const { bid, ...arg } = ctx.request.body
    try {
        let d = await brand.statusData(bid, arg)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})



module.exports = router