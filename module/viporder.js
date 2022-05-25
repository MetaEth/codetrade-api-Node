//暴露一个all_school的模型
let mongoose=require('mongoose')
const {Double} = require("mongodb");
//1.请来一个保安----引入约束
let Schema=mongoose.Schema
let vipOrderSchema=new Schema({
    //制定数据规则
    own:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'_user'
    },
    vipType:{
        type:String,
        required:true
    },
    orderId:{
        type:String,
        required: true,//是否必填
    },
    status:{
        type:Number,
        default:1,
    },
    payMoney:{
        type:Number,
        required:true
    },
    remarks:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default: Date.now
    }
})
module.exports=mongoose.model('viporder',vipOrderSchema)
