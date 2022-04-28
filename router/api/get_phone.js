var router=require('koa-router')()
//引入手机号码解密文件
let WXBizDataCrypt = require('../../utils/WXBizDataCrypt')
//引入小程序密钥
let Wx_Secret=require('../../utils/Wx_Secret')
let User=require('../../module/user')
router.get('/',async (ctx)=>{
  console.log(ctx.query,"hello")
  var appId = Wx_Secret.AppID
  var sessionKey = ctx.query.sessionKey
  var encryptedData =ctx.query.encryptedData
  var get_openid=ctx.query.openid
  var iv = ctx.query.iv
  var pc = new WXBizDataCrypt(appId, sessionKey)
  var data = pc.decryptData(encryptedData , iv)
  var phone=data.phoneNumber
  console.log(phone,"phone")
  //引入小程序密钥
  var openid=ctx.query.openid
  let result=await User.updateOne({openid},{phone}).then()
  if(result){
    ctx.body=phone
  }

})
module.exports=router.routes()
