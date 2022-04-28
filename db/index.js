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
/*
//封装数据库操作
var MongoClient=require('mongodb').MongoClient
var Config=require('../config')
class Db{
  static getInstance(){
    if(!Db.instance){
      Db.instance=new Db()
    }
    return Db.instance
  }
  constructor(){//构造方法
    this.dbClient=''
    this.connect()
  }
  connect(){//连接数据库
    let _this=this
    return new Promise(function(resolve,reject){
      if(!_this.dbClient){
        MongoClient.connect(Config.dbUrl,(err,client)=>{
          if(!err){
            _this.dbClient=client.db(Config.dbName)
            resolve(_this.dbClient)
          }else{
            reject(err)
          }
        })
      }else{
        resolve(_this.dbClient)
      }

    })

  }
  //查找一条数据
  find(collectionName,json){
    return new Promise((resolve,reject)=> {
      this.connect().then((db)=>{
        var result=db.collection(collectionName).find(json)
        result.toArray(function (err,docs) {
          if(!err){
            resolve(docs)
          }else{
            resolve(err)
          }
        })
      })
    })
  }
  //更新一条数据
  update(collectionName,json1,json2){
    return new Promise((resolve,reject)=>{
      this.connect().then((db)=>{
        db.collection(collectionName).updateOne(json1,{
          $set:json2
        },(err,result)=>{
          if(err){
            reject(err)
          }else{
            resolve(result)
          }
        })
      })
    })
  }
  //插入一条数据
  insert(collectionName,json){
    return new Promise((resolve,reject)=>{
      this.connect().then((db)=>{
        db.collection(collectionName).insertOne(json,function (err,reslut) {
          if(err){
            reject(err)
          }else{
            resolve(reslut)
          }
        })
      })
    })
  }
  //删除一条数据
  remove(collectionName,json){
    return new Promise((resolve,reject)=>{
      this.connect().then((db)=>{
        db.collection(collectionName).removeOne(json,function (err,result) {
          if(err){
            reject(err)
          }else{
            resolve(result)
          }
        })
      })
    })
  }
  findOne(collectionName,json){
    return new Promise((resolve,reject)=>{
      this.connect().then((db)=>{
        db.collection(collectionName).findOne(json,function (err,result) {
          if(err){
            reject(err)
          }else{
            resolve(result)
          }
        })
      })
    })
  }
}
var myDb=Db.getInstance()
module.exports=myDb
*/
