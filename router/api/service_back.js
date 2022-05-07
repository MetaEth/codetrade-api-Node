//服务器回调通知，
var router=require('koa-router')()
router.get('/',async (ctx)=>{
    var data=ctx.query
    console.log(data,"hello")

    ctx.body="succee"
})

module.exports=router.routes()
