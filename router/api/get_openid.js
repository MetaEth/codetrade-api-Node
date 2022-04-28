var router=require('koa-router')()
let Wx_Secret=require('../../utils/Wx_Secret')
let openidrequest=require('request')
router.get('/', async (ctx)=>{
  let result=await openidrequest({
    qs:{
      appid:Wx_Secret.AppID,
      secret:Wx_Secret.AppSecret,
      js_code:ctx.query.code,
      rant_type:'authorization_code'
    },
    url:'https://api.weixin.qq.com/sns/jscode2session',
  },function (error,res,result) {


  })
  ctx.body=result
})
module.exports=router.routes()
