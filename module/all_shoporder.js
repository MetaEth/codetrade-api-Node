//暴露一个all_school的模型
/*
all_shoporder用于存储用户生成二维码的所有商品订单，并不知道订单的支付状态，通过定时任务向微信检测订单的
状态，如果已经支付则写入shoporder订单，否则删除订单
 */
let mongoose=require('mongoose')
const {Double} = require("mongodb");
//1.请来一个保安----引入约束
let Schema=mongoose.Schema
let All_shopOrderSchema=new Schema({
    //制定数据规则
    own:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'_user'
    },
    shop:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'shop'
    },
    orderId:{
        type:String,
        required: true,//是否必填
    },
    //socketId，用于存放客户端生成的socketId
    socketId:{
      type:String,
    },
    //0代表未支付，1代表支付
    status:{
        type:Number,
        default:0,
    },
    shopMoney:{
        type:Number,
        required:true
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
        default: Date.now,
        select:false
    }
})
module.exports=mongoose.model('all_shoporder',All_shopOrderSchema)
