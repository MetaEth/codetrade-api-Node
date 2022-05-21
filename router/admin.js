var router=require('koa-router')()
var Shop=require('./admin/shop')
var User=require('./admin/user')
var Platform=require('./admin/platform')
var Codetype=require('./admin/codetype')
var Type=require('./admin/type')
var All_viporder=require('./admin/all_viporder')
var All_shoporder=require('./admin/all_shoporder')
//引入Order模块
//后台登入
router.post('/login',async (ctx)=>{
    console.log(ctx.request,"登入数据")
    ctx.body={
        "code": 20000,
        "data": {
            "token": "admin-token"
        }
    }
})
//获取用户
router.get('/info',async (ctx)=>{
    console.log(ctx.query,"用户数据")
    ctx.body={
        "code": 20000,
        "data": {
            "roles": ["admin"],
            "introduction": "I am a super administrator",
            "avatar": "https://img1.baidu.com/it/u=2661581405,2031571728&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
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
module.exports=router
