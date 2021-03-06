const Router = require('koa-router')
const coupon = require('../models/yy_coupon.js')
const coupon_log = require('../models/yy_coupon_log.js')
const { Auth } = require('../core/auth.js')

const router = new Router({
    prefix: '/coupon'
})
router.post('/', async (ctx, next) => {
    try {
        const { size = 10, page = 1, ...arguments } = ctx.request.body
        let d = await coupon.getData(size, page, arguments)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e || []
    }
})

router.post('/detail', async (ctx, next) => {
    try {
        const { cid } = ctx.request.body
        let d = await coupon.getDetail(cid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e || []
    }
})
router.post('/create', async (ctx, next) => {
    const { redeem, ...arg } = ctx.request.body
    try {
        let d = await coupon.createData(redeem, arg)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/edit', async (ctx, next) => {
    const { cid, ...arg } = ctx.request.body
    try {
        let d = await coupon.editData(cid, arg)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/status', async (ctx, next) => {
    const { cid, ...arg } = ctx.request.body
    try {
        const { state } = arg
        let d = await coupon.editData(cid, { state })
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/del', async (ctx, next) => {
    const { cid } = ctx.request.body
    try {
        let d = await coupon.delData(cid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/log', async (ctx, next) => {
    const { cid, size, page } = ctx.request.body
    try {
        let d = await coupon_log.getData(size, page, cid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})

module.exports = router