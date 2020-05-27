const Router = require('koa-router')

const FacilityDevice = require('../models/yy_facility_device.js')

const router = new Router({
    prefix: '/facility_device'
})
router.post('/', async (ctx, next) => {
    const {fid} = ctx.request.body
    try {
        let d = await FacilityDevice.getData(fid)
        ctx.body =await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/create', async (ctx, next) => {
    const {
        fid,
        device,
        remark
    } = ctx.request.body
    try {
        let d = await FacilityDevice.createData(fid,device, remark)
        ctx.body =await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/edit', async (ctx, next) => {
    const {fdid,...arg} = ctx.request.body
    try {
        let d = await FacilityDevice.editData(fdid,arg)
        ctx.body =await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/del', async (ctx, next) => {
    const {fdid} = ctx.request.body
    try {
        let d = await FacilityDevice.delData(fdid)
        ctx.body =await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
module.exports = router