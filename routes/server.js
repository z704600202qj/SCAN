const Router = require('koa-router')
const server = require('../models/yy_server.js')

const router = new Router({
    prefix: '/server'
})
router.post('/', async (ctx, next) => {
    const { stid } = ctx.request.body
    try {
        let d = await server.getData(stid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/list', async (ctx, next) => {
    const { size = 10, page = 1, ...arg } = ctx.request.body
    try {
        let d = await server.getPgeData(size,page,arg)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})

router.post('/detail', async (ctx, next) => {
    const { sid } = ctx.request.body
    try {
        let d = await server.getDetail(sid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/edit', async (ctx, next) => {
    const { sid,spid,...arg } = ctx.request.body
    try {
        let d = await server.editData(sid,spid,arg)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/del', async (ctx, next) => {
    const { sid } = ctx.request.body
    try {
        let d = await server.delData(sid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/create', async (ctx, next) => {
    const {  server_name, ...arg} = ctx.request.body
    try {
        let d = await server.createData(server_name, arg)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
module.exports = router
