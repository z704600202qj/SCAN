const Router = require('koa-router')

const serverType = require('../models/yy_server_type.js')

const router = new Router({
    prefix: '/server_type'
})
router.get('/', async (ctx, next) => {
    try {
        let d = await serverType.getData()
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e || []
    }
})
router.post('/create', async (ctx, next) => {
    const {
        type,
        remark
    } = ctx.request.body
    try {
        let d = await serverType.createData(type, remark)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/edit', async (ctx, next) => {
    const { stid, ...arg } = ctx.request.body
    try {
        let d = await serverType.editData(stid, arg)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/del', async (ctx, next) => {
    const {stid} = ctx.request.body
    try {
        let d = await serverType.delData(stid)
        ctx.body =await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
module.exports = router
