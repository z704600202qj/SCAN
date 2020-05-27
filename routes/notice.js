const Router = require('koa-router')

const Notice = require('../models/yy_notice.js')

const router = new Router({
    prefix: '/notice'
})
router.post('/', async (ctx, next) => {
    try {
        const { size = 10, page = 1, ...arguments } = ctx.request.body
        let d = await Notice.getData(size, page,arguments)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e || []
    }
})
router.post('/create', async (ctx, next) => {
    const { title, content, } = ctx.request.body
    try {
        let d = await Notice.createData(title,content)
        ctx.body =await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/detail', async (ctx, next) => {
    const {nid} = ctx.request.body
    try {
        let d = await Notice.detailData(nid)
        ctx.body =await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/edit', async (ctx, next) => {
    const {nid,...arg} = ctx.request.body
    try {
        let d = await Notice.editData(nid,arg)
        ctx.body =await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/del', async (ctx, next) => {
    const {nid} = ctx.request.body
    try {
        let d = await Notice.delData(nid)
        ctx.body =await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
module.exports = router