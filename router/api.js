var router=require('koa-router')()
var login=require('./api/login')
var pay=require('./api/pay')
var server_time=require('./api/server_time')
var tencentcloud=require('./api/tencentcloud')
var wechat=require('./api/wechat')
var notify_url=require('./api/notify_url')
const tokenConfig = require('../utils/Wx_Secret').tokenConfig
const jwt = require("jsonwebtoken");
/*判断登入是否过期*/
router.get('/getUserInfo', async (ctx) => {
  try {
    const token = ctx.header.authorization // 获取请求 Header 中 Authorization 值
    let userInfo = {}
    if (token === '') {
      ctx.body = {code: 0, message: '未登陆'}
    } else {
      try {
        userInfo = jwt.verify(token.split(' ')[1], tokenConfig.privateKey) // 验证 token
        ctx.body = {code: 200, message: '已登陆', data: userInfo}
      } catch(err) {
        // token 过期或无效
        ctx.body = {code: 400, message: '登入已过期', data: {userInfo: {}, loginStatus: false}}}
    }
  } catch(err) {
    throw new Error(err)
  }
})
router.get('/',(ctx)=>{
  ctx.body="api"
})
router.use('/login',login)
router.use('/pay',pay)
router.use('/server_time',server_time)
router.use('/tencentcloud',tencentcloud)
router.use('/wechat',wechat)
router.use('/notify_url',notify_url)

module.exports=router
