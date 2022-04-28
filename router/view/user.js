var router=require('koa-router')()
let User=require('../../module/user')
router.get('/',async (ctx)=>{
  ctx.body="user/"
})
router.post('/findOne',async (ctx)=>{
  var get_phone=ctx.request.body.phone
  var result=await User.findOne({phone:get_phone})
  ctx.body=result
})
router.post('/insertOne',async (ctx)=>{
  var get_smscode=ctx.request.body.smscode
  var get_phone=ctx.request.body.phone
  var get_password=ctx.request.body.password
  var get_username=ctx.request.body.username
  if(get_smscode ==ctx.session.code && get_phone == ctx.session.phone){
    let result=await User.create({
      username: get_username,
      password: get_password,
      phone: get_phone,
      money:0
    })
    ctx.body=result
  }else{
    ctx.body={code: 400, message: '注册失败，验证码或号码无效'}
  }

})
router.post('/updateOne',async (ctx)=>{
  var get_smscode=ctx.request.body.smscode
  const get_phone=ctx.request.body.phone
  const get_password=ctx.request.body.password
  if(get_smscode ==ctx.session.code && get_phone == ctx.session.phone){
    var result=await User.updateOne({phone:get_phone},{password:get_password})
    ctx.body=result
  }else{
    ctx.body={code: 400, message: '密码重置失败，验证码或号码无效'}
  }
})

router.get('/deleteOne', async (ctx)=>{
  ctx.body="user/delete"
})
module.exports=router.routes()

