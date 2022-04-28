const Type = require("../../module/type");
var router=require('koa-router')()

//查找所有数据
router.get('/find',async (ctx)=>{
    let result=await Type.find().sort({'createdAt':-1})
    ctx.body=result
})
router.get('/findOne',async (ctx)=>{

})
router.get('/insertOne',async (ctx)=>{
    let result=await Type.find().sort({'createdAt':-1})
    ctx.body=result
})
router.get('/add',async (ctx)=>{

})
router.get('/edit',async (ctx)=>{

})
router.get('/delete', async (ctx)=>{

})
module.exports=router.routes()

