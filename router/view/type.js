const Type = require("../../module/type");
var router=require('koa-router')()

//查找所有数据
router.get('/find',async (ctx)=>{
    let result=await Type.find().sort({'type_sort':-1})
    ctx.body=result
})
module.exports=router.routes()

