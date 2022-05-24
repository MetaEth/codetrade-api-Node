//暴露一个登陆的模型
let mongoose=require('mongoose')
const {Double} = require("mongodb");
//1.请来一个保安----引入约束
let Schema=mongoose.Schema
let ShopSchema=new Schema({
    shop_name:{
        type:String,
        default:true
    },
    picture:{
        type:String,
        default:true
    },
    price:{
        type:Number,
        default:true
    },
    label:{
        type:Array,
        default:true
    },
    is_sale:{
      type:Boolean,
      default:true
    },
    sale_number:{
        type:Number,
        default:0
    },
    project_introduce:{
        type:String
    },
    project_display:{
        type:Array
    },
    project_experience:{
        type:String
    },
    platform_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'platform'
    },
    type_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'type'
    },
    codetype_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'codetype'
    },
    download_times:{
        type:Number,
        default:0
    },
    is_complete:{
      type:Boolean,
      required:true
    },
    download_links:{
        type:String,
    },
    shop_sort:{
        type:Date,
        select: false
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    updatedAt:{
        type:Date,
        default: Date.now,
        select: false
    }
})
module.exports=mongoose.model('shop',ShopSchema)
/*暴露出模型对象*/
