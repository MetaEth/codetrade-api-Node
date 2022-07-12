var router=require('koa-router')()
var Shop=require('./admin/shop')
var User=require('./admin/user')
var Platform=require('./admin/platform')
var Codetype=require('./admin/codetype')
var Type=require('./admin/type')
var All_viporder=require('./admin/all_viporder')
var All_shoporder=require('./admin/all_shoporder')
var upload=require('./admin/upload')
const jwt = require("jsonwebtoken");
const {tokenConfig} = require("../utils/Wx_Secret");
var adminLogin=require("../utils/Wx_Secret").adminLogin
//匹配所有路由进行拦截
router.all('/(.*)',async (ctx,next)=>{
    var url=["/admin/login","/admin/info","/admin/logout"]  //定义路由白名单
    var get_url=ctx.url
    if(url.includes(get_url)){
        await next()
    }else{
        var token=ctx.get("X-Token")
        try {
            userInfo = jwt.verify(token.split(' ')[1], tokenConfig.privateKey) // 验证 token
            ctx.body = {code: 20000, message: '已登陆'}
            await next()   //验证通过

        } catch(err) {
            // token 过期或无效
            ctx.body = {code: 400, message: '登入已过期'}
        }
    }
})
//后台登入
router.post('/login',async (ctx)=>{
    var username=ctx.request.body.username
    var password=ctx.request.body.password
    if(username===adminLogin.username && password===adminLogin.password){
        const userInfo ={
            username:adminLogin.username,
            password:adminLogin.password
        }
        const token = jwt.sign(userInfo, tokenConfig.privateKey, {expiresIn: '1d'}) // 签发 token， 7天有效期
        ctx.body = {code: 20000, message: '登陆成功', data: {token: 'Bearer ' + token}}
    }else{
        ctx.body={
            "code": 400,
            "msg":"登入失败"
        }
    }


})
//获取用户
router.get('/info',async (ctx)=>{
    ctx.body={
        "code": 20000,
        "data": {
            "roles": ["admin"],
            "introduction": "I am a super administrator",
            "avatar": "https://files.idleduck.cn/picture/MetaX.png",
            "name": "Super Admin"
        }
    }
})
router.post('/logout',async (ctx)=>{
    ctx.body={
        code: 20000,
        data: 'success'
    }
})
router.use('/user',User)
router.use('/shop',Shop)
router.use('/platform',Platform)
router.use('/codetype',Codetype)
router.use('/type', Type)
router.use('/all_viporder',All_viporder)
router.use('/all_shoporder',All_shoporder)
router.use('/upload',upload)
module.exports=router
