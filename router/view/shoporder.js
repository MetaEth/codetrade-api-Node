var router=require('koa-router')()
var shopOrder=require('../../module/shoporder')
//查找数据
router.get('/insertOne',async (ctx)=>{
    console.log(JSON.parse(ctx.query.shop_data),"test")

    var result=await shopOrder.create(JSON.parse(ctx.query.shop_data))
    ctx.body=result
})
router.get('/find',async (ctx)=>{
    var get_id=ctx.query.id
    var result=await shopOrder.find({own:get_id}).populate('shop').limit(50)
    ctx.body=result
})
router.get('/findOne',async (ctx)=>{
    var get_shop=ctx.query.shop
    var get_own=ctx.query.own
    var result=await shopOrder.findOne({own:get_own,shop:get_shop}).populate('shop')
    ctx.body=result
})
router.get('/updateOne',async (ctx)=>{

})
router.get('/deleteOne', (ctx)=>{
    ctx.body="order/delete"
})
module.exports=router.routes()
