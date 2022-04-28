var router=require('koa-router')()
//返回服务器当前的时间
router.get('/',async (ctx)=>{
    var date=new Date()
    let y = 1900 + date.getYear();
    let m = "0" + (date.getMonth() + 1);
    let d = "0" + date.getDate();
    let h = "0" + date.getHours();
    let mm = "0" + date.getMinutes();
    let s = date.getSeconds();
    let server_time= y + "-" + m.substring(m.length - 2, m.length) + "-" + d.substring(d.length - 2, d.length) + " " + h.substring(h.length - 2, h.length) + ":" + mm.substring(mm.length - 2, mm.length) + ":" + s;
    ctx.body=server_time
})
module.exports=router.routes()
