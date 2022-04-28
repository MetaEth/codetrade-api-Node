//暴露一个登陆的模型
let mongoose=require('mongoose')
//1.请来一个保安----引入约束
let Schema=mongoose.Schema
let PlatformSchema=new Schema({
    platform_name:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now,
        select: false
    },
    updatedAt:{
        type:Date,
        default: Date.now,
        select: false
    }
})
module.exports=mongoose.model('platform',PlatformSchema)
/*暴露出模型对象*/
