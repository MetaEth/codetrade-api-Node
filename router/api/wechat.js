var router=require('koa-router')()
router.post('/',async (ctx)=>{
    ctx.body="succee"
})
module.exports=router.routes()
