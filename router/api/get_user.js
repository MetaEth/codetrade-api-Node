var router=require('koa-router')()
let Wx_Secret=require('../../utils/Wx_Secret')
let mongoose=require('mongoose')
let User=require('../../module/user')
ObjectId = require('mongodb').ObjectID;
router.get('/', async (ctx)=>{
  //查找一行数据
  var openid=ctx.query.openid
  var session_key=ctx.query.session_key
  if(openid == "undefined" && session_key == "undefined"){
    return false
  }
  let result=await User.findOne({"openid": openid}).populate('which_school').then()
  if(result){
    ctx.body=result
  }else{
    //创建一行数据
    ctx.body=await User.create({
      username: '',
      phone:'',
      is_get_number: false,
      is_login:false,
      money:0.0,
      user_info: null,
      password:'',
      school:'',
      openid:openid,
      session_key:session_key
    }).then()

  }
})
module.exports=router.routes()
