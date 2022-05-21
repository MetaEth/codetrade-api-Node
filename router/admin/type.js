const Type = require("../../module/type");
var router=require('koa-router')()

//查找所有数据
router.post('/find',async (ctx)=>{
    let result=await Type.find().sort({'type_sort':-1})
    ctx.body=result
})
router.post('/insertOne',async (ctx)=>{
    var get_data=ctx.request.body
    var result=await Type.create(get_data)
    ctx.body=result
})
module.exports=router.routes()

