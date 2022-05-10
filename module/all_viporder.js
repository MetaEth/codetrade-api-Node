//暴露一个all_school的模型
/*
all_viporder用于存储用户生成二维码的所有商品订单，并不知道订单的支付状态，通过定时任务向微信检测订单的
状态，如果已经支付则写入viporder订单，否则删除订单
 */
let mongoose=require('mongoose')
const {Double} = require("mongodb");
//1.请来一个保安----引入约束
let Schema=mongoose.Schema
let All_vipOrderSchema=new Schema({
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
    payMoney:{
        type:Number,
        required:true
    },
    vipAt:{
        type:Date,
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
module.exports=mongoose.model('all_viporder',All_vipOrderSchema)
