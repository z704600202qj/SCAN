const Router = require('koa-router')

const server = require('../models/yy_server.js')

const router = new Router({
    prefix: '/server'
})
router.get('/', async (ctx, next) => {
    const { stid } = ctx.request.query
    try {
        let d = await server.getData(stid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.get('/detail', async (ctx, next) => {
    const { sid } = ctx.request.query
    try {
        let d = await server.getDetail(sid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/edit', async (ctx, next) => {
    const { sid,...arg } = ctx.request.body
    try {
        let d = await server.editData(sid,arg)
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
