var Koa = require('koa')
var app=new Koa()
const bodyParser = require('koa-bodyparser')
const session = require('koa-session');
// 使用ctx.body解析中间件
app.use(bodyParser())
var router=require('koa-router')()
var view=require('./router/view')
var api=require('./router/api')
var admin=require('./router/admin')



app.keys = ['some secret hurr'];  /* cookie的签名 */
const CONFIG = {
  key: 'koa:sess', /* 默认的cookie签名 */
  maxAge: 15*60*1000,/* cookie的最大过期时间 */
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** 无效属性 */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** 默认签名与否 */
  rolling: false, /** 每次请求强行设置cookie */
  renew: false, /** cookie快过期时自动重新设置*/
};
app.use(session(CONFIG, app));


let db=require('./db/index')
;(async ()=>{
  await db
  //使用中间路由器
  router.use('/view',view.routes())
  router.use('/api',api.routes())
  router.use('/admin',admin.routes())
  app.use(router.routes()).use(router.allowedMethods())
  console.log("项目运行正常")
})()

app.listen(8081)
