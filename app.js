var Koa = require('koa')
var app=new Koa()
const bodyParser = require('koa-bodyparser')
const koaBody = require('koa-body')
const session = require('koa-session');
//使用koa实现文件上传
app.use(koaBody({multipart:true}));
// 使用ctx.body解析中间件
app.use(bodyParser())
var router=require('koa-router')()
var view=require('./router/view')
var api=require('./router/api')
var admin=require('./router/admin')

//创建socket连接
var http=require('http')
var socket=require('socket.io')
//如果原来是用app.listen(3000);来启动服务，现在要改成用http来启动server
var server = http.createServer(app.callback());
//挂载socket
var io = socket(server).on("connection",(socket)=>{
  console.log(socket.id+"连接socket")
  //io.emit('hello',"你好我是服务端发来的数据")
  socket.emit('socketId',socket.id)
  socket.emit('payStatus')
  //接收服务端client发来的事件,用socket.on
  socket.on("client",data=>{
    console.log(data,"client发来的数据")
  })
  socket.on('disconnect', () => {
    console.log(socket.id,'客户关闭socket连接')
  })
})

/* 设置服务器cookie session的签名 */
app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa:sess', /* 默认的cookie签名 */
  maxAge: 15*60*1000,/* 15分钟失效 cookie的最大过期时间 */
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
server.listen(8081,()=>{
  console.log("端口：8081已连接")
});

exports.io=io


