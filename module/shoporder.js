//暴露一个all_school的模型
let mongoose=require('mongoose')
//1.请来一个保安----引入约束
let Schema=mongoose.Schema
let shopOrderSchema=new Schema({
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
    status:{
        type:String,
        default:"已支付",
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
module.exports=mongoose.model('shoporder',shopOrderSchema)
