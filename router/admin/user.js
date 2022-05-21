var router=require('koa-router')()
var User=require('../../module/user')
router.post('/find',async (ctx)=>{
  var get_data=ctx.request.body
  var pageSize=ctx.request.body.pageSize
  var page=ctx.request.body.page
  var skip=(page-1)*pageSize
  //删除 page和pageSize
  delete get_data.pageSize
  delete get_data.page
  var result=await User.find(get_data).skip(skip).limit(pageSize).sort({"createdAt":-1})
  ctx.body=result
})
router.post('/count',async (ctx)=>{
  var get_data=ctx.request.body
  //删除 page和pageSize
  delete get_data.pageSize
  delete get_data.page
  var result=await User.find(get_data).count()
  ctx.body=result
})
module.exports=router.routes()
