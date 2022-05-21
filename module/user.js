//暴露一个登陆的模型
let mongoose=require('mongoose')
//1.请来一个保安----引入约束
let Schema=mongoose.Schema
let _UserSchema=new Schema({
  username:{
    type:String,
  },
  password:{
    type:String,
    select: false
  },
  phone:{
    type:Number,
  },
  money:{
    type:Number,
  },
  /*
  0,代表没有开通，1，代表月会员，2，代表年会员，3，代表永久会员
   */
  vip_type:{
    type:Number,
    default:0
  },
  vipAt:{
    type:Date,
    default: Date.now,
  },
  createdAt:{
    type:Date,
    default:Date.now
  },
  updatedAt:{
    type:Date,
    default: Date.now,
  }
})
module.exports=mongoose.model('_user',_UserSchema)
/*暴露出模型对象*/
