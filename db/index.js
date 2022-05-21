//暴露一个连接数据的模块
let mongoose=require('mongoose')
mongoose.set('useCreateIndex',true)
//定义数据库名字
const DB_NAME='tradecode'
//定义数据库地址
const DB_URL='localhost:27017'
//构建一个Promise实例
module.exports=new Promise((resolve,reject)=>{
  //连接数据库
  mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`,{userNewUrlParset: true})
  //监听数据库
  mongoose.connection.on('open',(err)=>{
    if(!err) {
      console.log("数据库连接成功")
      resolve()
    }else{

      reject(err)
    }
  })
})
