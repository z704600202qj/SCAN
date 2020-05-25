const Router = require('koa-router')

const helpAbout = require('../models/yy_help_about.js')
const help = require('../models/yy_help.js')

const router = new Router({
    prefix: '/help'
})
router.post('/', async (ctx, next) => {
    try {
        let d = await help.getData()
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e || []
    }
})
router.post('/create', async (ctx, next) => {
    const { title,...arg } = ctx.request.body
    try {
        let d = await help.createData(title,arg)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e || []
    }
})
router.post('/edit', async (ctx, next) => {
    const { hid, ...content } = ctx.request.body
    try {
        let d = await help.editData(hid, content)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e || []
    }
})
router.post('/del', async (ctx, next) => {
    const { hid, } = ctx.request.body
    try {
        let d = await help.delData(hid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e || []
    }
})
router.post('/about', async (ctx, next) => {
    try {
        let d = await helpAbout.getData()
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e || []
    }
})
router.post('/editabout', async (ctx, next) => {
    const { haid, ...content } = ctx.request.body
    try {
        let d = await helpAbout.editData(haid, content)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e || []
    }
})
router.post('/createabout', async (ctx, next) => {
    const { content } = ctx.request.body
    try {
        let d = await helpAbout.createData({ content })
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e || []
    }
})
module.exports = router
