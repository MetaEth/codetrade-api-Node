var router=require('koa-router')()
let User=require('../../module/user')
//实现jwt，token登录
const tokenConfig = require('../../utils/Wx_Secret').tokenConfig
const jwt = require('jsonwebtoken')
router.post('/',async (ctx)=>{
  try {

    var get_phone=ctx.request.body.phone
    var get_password=ctx.request.body.password
    var result =await User.findOne({phone:get_phone,password:get_password})
    if (result) {
      const userInfo ={ vip_type: result.vip_type,
        vipAt: result.vipAt,
        _id: result._id,
        username: result.username,
        phone: result.phone,
        money: result.money,
      }
      const token = jwt.sign(userInfo, tokenConfig.privateKey, {expiresIn: '7d'}) // 签发 token， 7天有效期
      ctx.body = {status: 200, message: '登陆成功', data: {token: 'Bearer ' + token,userInfo:result}}

    } else {
      ctx.body = {status: 400, message: '账号或密码错误'}
    }
  } catch(err) {
    throw new Error(err)
  }


})

module.exports=router.routes()
