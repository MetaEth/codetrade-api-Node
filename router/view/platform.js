var router=require('koa-router')()
let Platform=require('../../module/platform')
//查找所有数据
router.get('/find',async (ctx)=>{
    let result=await Platform.find()
    ctx.body=result
})
router.get('/add',async (ctx)=>{

})
router.get('/edit',async (ctx)=>{

})
router.get('/delete', async (ctx)=>{

})
module.exports=router.routes()

