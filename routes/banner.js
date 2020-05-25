const Router = require('koa-router')

const banner = require('../models/yy_banner.js')

const router = new Router({
    prefix: '/banner'
})
router.post('/', async (ctx, next) => {
    try {
        const { size = 10, page = 1, ...arguments } = ctx.request.body
        let d = await banner.getData(size, page, arguments)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e || []
    }
})
router.post('/create', async (ctx, next) => {
    const { pic_path, is_linker, link } = ctx.request.body
    try {
        let d = await banner.createData(pic_path, is_linker, link)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/edit', async (ctx, next) => {
    const { bid, ...arg } = ctx.request.body
    try {
        let d = await banner.editData(bid, arg)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/del', async (ctx, next) => {
    const { bid } = ctx.request.body
    try {
        let d = await banner.delData(bid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
module.exports = router