const codeType = require("../../module/codetype");
var router=require('koa-router')()

//查找所有数据
router.get('/find',async (ctx)=>{
    let result=await codeType.find().sort({"sort":-1})
    ctx.body=result
})
module.exports=router.routes()
