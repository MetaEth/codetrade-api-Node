var router=require('koa-router')()
var User=require('../../module/user')
var Platform=require('../../module/platform')
var Type=require('../../module/type')
var Codetype=require('../../module/codetype')
router.get('/',async (ctx)=>{
  /*
  var get_id=ctx.query.id
  let result=await User.findOne({_id:get_id})
  ctx.body=result
   */
})
router.get('/add',async (ctx)=>{
  ctx.body="user/add"
})
router.get('/update',async (ctx)=>{
  /*
  const get_data=ctx.query
  const id=ctx.query.id
  delete get_data.id
  let result=await User.updateOne({_id:id},get_data)
  ctx.body=result

   */
})
router.get('/delete', async (ctx)=>{
  ctx.body="user/delete"
})
router.get('/find',async (ctx)=>{
  /*
  var get_data=ctx.query
  let result=await User.find(get_data).populate('which_school')
  ctx.body=result

   */
})
router.get('/platfrom',async (ctx)=>{
  Platform.create({
    platform_name:'不限'
  })
  ctx.body="platform"
})
router.get('/codetype',async (ctx)=>{
  Codetype.create({
    codetype:'不限'
  })
})
router.get('/type',async (ctx)=>{

})
module.exports=router.routes()
