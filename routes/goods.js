const Router = require('koa-router')

const Goods = require('../models/yy_goods.js')
const goodsFacility = require('../models/yy_goods_facility.js')
const BrandShopGoods = require('../models/yy_brand_shop_goods.js')

const router = new Router({
    prefix: '/goods'
})
router.post('/', async (ctx, next) => {
    const { size,page,...arg } = ctx.request.body

    try {
        let d = await Goods.getData( size,page,arg )
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e || []
    }
})
router.post('/detail', async (ctx, next) => {
    const { gid } = ctx.request.body
    try {
        let d = await Goods.getDetail(gid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/create', async (ctx, next) => {
    const {
        stid,
        fids,
        ...arg
    } = ctx.request.body
    try {
        let d = await Goods.createData(stid, arg)
        let arr=fids.map(item=>{
            return {
                gid:d.gid,
                fid:item,
                device_state:1
            }
        })
        await goodsFacility.createData(arr)
        await BrandShopGoods.createData({
            gid: d.gid,
            bsid: arg.bsid,
            bid: arg.bid,
          })
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/edit', async (ctx, next) => {
    const { gid, ...arg } = ctx.request.body
    try {
        let d = await Goods.editData(gid, arg)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
router.post('/del', async (ctx, next) => {
    const { gid, } = ctx.request.body
    try {
        let d = await Goods.delData(gid)
        ctx.body = await new global.errs.Success(d)
    } catch (e) {
        ctx.body = e
    }
})
module.exports = router