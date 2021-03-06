const Router = require('koa-router')

const Facility = require('../models/yy_facility.js')

const router = new Router({
    prefix: '/facility'
})
router.post('/', async (ctx, next) => {
    try {
        let d = await Facility.getData()
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e || []
    }
})
router.post('/detail', async (ctx, next) => {
    const { fid } = ctx.request.body
    try {
        let d = await Facility.getDetail(fid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/create', async (ctx, next) => {
    const {
        title,
        remark
    } = ctx.request.body
    try {
        let d = await Facility.createData(title, remark)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/edit', async (ctx, next) => {
    const { fid, ...arg } = ctx.request.body
    try {
        let d = await Facility.editData(fid, arg)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/del', async (ctx, next) => {
    const { fid, } = ctx.request.body
    try {
        let d = await Facility.delData(fid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
module.exports = router