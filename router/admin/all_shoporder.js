
var router=require('koa-router')()
var All_shoporder=require('../../module/all_shoporder')
//查找所有数据
router.post('/find',async (ctx)=>{
    var get_data=ctx.request.body
    var pageSize=ctx.request.body.pageSize
    var page=ctx.request.body.page
    var skip=(page-1)*pageSize
    //删除 page和pageSize
    delete get_data.pageSize
    delete get_data.page
    var result=await All_shoporder.find().skip(skip).limit(pageSize).populate('own shop').sort({"createdAt":-1})
    ctx.body=result
})
router.post('/deleteOne',async (ctx)=>{
    var id=ctx.request.body.id
    var result=await All_shoporder.deleteOne({_id:id})
    ctx.body=result
})
router.post('/count',async (ctx)=>{
    var result=await All_shoporder.find().count()
    ctx.body=result
})
module.exports=router.routes()
