const codeType = require("../../module/codetype");
var router=require('koa-router')()

//查找所有数据
router.post('/find',async (ctx)=>{
    let result=await codeType.find().sort({"sort":-1})
    ctx.body=result
})
router.post('/insertOne',async (ctx)=>{
    var get_data=ctx.request.body
    var result=await codeType.create(get_data)
    ctx.body=result
})
module.exports=router.routes()
