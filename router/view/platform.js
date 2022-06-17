var router=require('koa-router')()
let Platform=require('../../module/platform')
//查找所有数据
router.get('/find',async (ctx)=>{
    let result=await Platform.find().sort({"platform_sort":-1})
    ctx.body=result
})

module.exports=router.routes()

