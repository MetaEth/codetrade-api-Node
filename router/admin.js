var router=require('koa-router')()
var Shop=require('./admin/shop')
var User=require('./admin/user')
var Platform=require('./admin/platform')
var Codetype=require('./admin/codetype')
var Type=require('./admin/type')
var All_viporder=require('./admin/all_viporder')
var All_shoporder=require('./admin/all_shoporder')
var upload=require('./admin/upload')
//引入Order模块
//后台登入
router.post('/login',async (ctx)=>{
    var username=ctx.request.body.username
    var password=ctx.request.body.password
    if(username=="admin" && password=="Az1114221010"){
        console.log("你好")
        ctx.body={
            "code": 20000,
            "data": {
                "token": "admin-token"
            }
        }
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
