//暴露一个登陆的模型
let mongoose=require('mongoose')
//1.请来一个保安----引入约束
let Schema=mongoose.Schema
let codeTypeSchema=new Schema({
    codetype:{
        type:String,
        required:true
    },
    sort:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default: Date.now,
        select:false
    }

})
module.exports=mongoose.model('codetype',codeTypeSchema)
/*暴露出模型对象*/
