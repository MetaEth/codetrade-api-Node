var router=require('koa-router')()
var Platform=require('../../module/platform')
router.post('/find',async (ctx)=>{
    var result=await Platform.find().sort({"platform_sort":-1})
    ctx.body=result
})
router.post('/insertOne',async (ctx)=>{
    var get_data=ctx.request.body
    var result=await Platform.create(get_data)
    ctx.body=result
})
module.exports=router.routes()
