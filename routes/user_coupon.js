const Router = require('koa-router')
const user_coupon = require('../models/yy_user_coupon.js')
const {Auth}=require('../core/auth.js')

const router = new Router({
    prefix: '/user_coupon'
})
router.post('/',new Auth().levels, async (ctx, next) => {
    const {userid}=ctx.auth.userid
    try {
        let d = await user_coupon.getData(userid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/create',new Auth().levels, async (ctx, next) => {
    const {userid,cid}=ctx.auth.userid
    try {
        let d = await user_coupon.saveData(userid,cid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
module.exports = router
