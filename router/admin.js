var router=require('koa-router')()
var user=require('./admin/user')
var shop=require('./admin/shop')
//引入User模块
var User=require('../module/user')
//引入Order模块

//后台登入
router.post('/login',async (ctx)=>{
  /*
  var get_username=ctx.request.body.username
  var get_password=ctx.request.body.password
  let result=await User.findOne({username:get_username,password:get_password})
  if(result){
    ctx.body={"data":result,"status":200}
  }else{
    ctx.body={"data":null,"status":-400}
  }

   */
})
//判断是否退款
router.get('/is_refund',async (ctx)=>{
  /*
  var get_id=ctx.query.id
  let result=await Order.findOne({_id:get_id})
  ctx.body=result

   */
})
router.use('/user',user)
router.use('/shop',shop)
module.exports=router
