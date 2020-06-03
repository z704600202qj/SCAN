const Router = require('koa-router')
const user_template = require('../models/yy_user_template.js')
const { Auth } = require('../core/auth.js')

const router = new Router({
    prefix: '/user_template'
})
router.post('/list', async (ctx, next) => {
    try {
        const { userid } = ctx.request.body
        let d = await user_template.getData(userid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/', new Auth().levels, async (ctx, next) => {
    try {
        const { userid } = ctx.auth.userid
        let d = await user_template.getData(userid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/create', new Auth().levels, async (ctx, next) => {
    try {
        const { userid } = ctx.auth.userid
        const {  bill_type, ...arg } = ctx.request.body
        let d = await user_template.createData(userid,bill_type, arg)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/edit', new Auth().levels, async (ctx, next) => {
    try {
        const {  utid, ...arg } = ctx.request.body
        let d = await user_template.editData(utid, arg)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/del', new Auth().levels, async (ctx, next) => {
    try {
        const { utid } = ctx.request.body
        let d = await user_template.delData(utid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
module.exports = router