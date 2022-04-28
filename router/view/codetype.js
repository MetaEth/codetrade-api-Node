const codeType = require("../../module/codetype");
var router=require('koa-router')()

//查找所有数据
router.get('/find',async (ctx)=>{
    let result=await codeType.find()
    ctx.body=result
})
router.get('/findOne',async (ctx)=>{

})
router.get('/insertOne',async (ctx)=>{

    ctx.body=result
})
router.get('/updateOne',async (ctx)=>{

})
router.get('/deleteOne', async (ctx)=>{

})
module.exports=router.routes()
