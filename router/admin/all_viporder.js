var router=require('koa-router')()
var All_viporder=require('../../module/all_viporder')
//查找所有数据
router.post('/find',async (ctx)=>{
    var get_data=ctx.request.body
    var pageSize=ctx.request.body.pageSize
    var page=ctx.request.body.page
    var skip=(page-1)*pageSize
    //删除 page和pageSize
    delete get_data.pageSize
    delete get_data.page
    var result=await All_viporder.find(get_data).skip(skip).limit(pageSize).populate('own').sort({"createdAt":-1})
    ctx.body=result
})
router.post('/deleteOne',async (ctx)=>{
    var id=ctx.request.body.id
    var result=await All_viporder.deleteOne({_id:id})
    ctx.body=result
})
router.post('/count',async (ctx)=>{
    var get_data=ctx.request.body
    console.log(get_data,"count")
    //删除 page和pageSize
    delete get_data.pageSize
    delete get_data.page
    var result=await All_viporder.find(get_data).count()
    ctx.body=result
})
module.exports=router.routes()
