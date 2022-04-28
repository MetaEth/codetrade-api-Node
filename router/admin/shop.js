var router=require('koa-router')()
let Shop=require('../../module/shop')
const mongoose = require("mongoose");
const {object} = require("mongoose/lib/utils");
const {ObjectID} = require("mongoose/lib/schema");

var asyncFunc = function(i) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var shop_name=`网站项目网旅${i}`
            var codetype_id="6249aa8980080000d7005e32"
            var platform_id="624a7593e1f2ee47a86511fe"
            var type_id="624004fc0085321f50bf49e2"
            Shop.create({
                shop_name:shop_name,
                picture:"https://www.sonorous.icu/wp-content/uploads/2022/03/cropped-jarrod-terry-simpsons.jpg",
                price:50,
                label:["生活","工具","效率"],
                project_introduce:"<p>1，此项目可以用于校园创业，直接商用，或者用于个人学习，功能强大，代码量超过2万行，并且每个校园的业务都是互相独立的，</p><p>2，用户发布物品时，支持发布视频，图片等，</p><p>3，用户可以发布论坛，支持视频（视频封面的问题已处理），图片，文字等，管理员可以对论坛进行管</p><p>4，用户发布拼车，可以删除或隐藏拼车信息</p><p>5，该项目支持校园快递代拿，用户上传快递代拿的信息，平台可以帮送（赚取利润）</p><p>6，闲置物品交易模式类似咸鱼，买家下单后，会推送卖家信息模板给卖家，并且发送短信通知卖家发货，买家收到货后不满意可以向平台申请退款，申诉等功能</p><p>7，本人是个人开发者，原本想用于校园创业，由于已是大三，没有更多是时间用于平台的管理和推广，目前靠平台快递代拿赚取一点利润，如果您购买我的代码，在遇到问题时，可以随时找我，我会尽力解决代码上的问题，感谢您的支持！</p>",
                project_display:[
                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                ],
                project_experience:"https://pan.baidu.com/s/1wiEpzbxikvro1m2UbKKl5g 提取码：00bw",
                is_complete:true,
                platform_id:platform_id,
                type_id:type_id,//管理
                codetype_id:codetype_id,//源码类型
            },(err,data)=>{
                if(!err) console.log(data,"插入成功")
                else console.log(err,"插入失败")

            })
            resolve();
        }, 3000);
    });
}
router.get('/',async (ctx)=>{
    for(let i=0;i<60;i++){
        await asyncFunc( i);

    }
    /*
    var shop_name=`免费${i}`
    var platform_id="624003b756609449a8fcf78f"
    var type_id="624004fc0085321f50bf49da"
    var codetype_id="6247f7802439211ae0e6ebc0"
    await Shop.create({
        shop_name:shop_name,
        picture:"https://www.sonorous.icu/wp-content/uploads/2022/03/cropped-jarrod-terry-simpsons.jpg",
        price:0,
        label:["生活","工具","效率"],
        project_introduce:"<p>1，此项目可以用于校园创业，直接商用，或者用于个人学习，功能强大，代码量超过2万行，并且每个校园的业务都是互相独立的，</p><p>2，用户发布物品时，支持发布视频，图片等，</p><p>3，用户可以发布论坛，支持视频（视频封面的问题已处理），图片，文字等，管理员可以对论坛进行管</p><p>4，用户发布拼车，可以删除或隐藏拼车信息</p><p>5，该项目支持校园快递代拿，用户上传快递代拿的信息，平台可以帮送（赚取利润）</p><p>6，闲置物品交易模式类似咸鱼，买家下单后，会推送卖家信息模板给卖家，并且发送短信通知卖家发货，买家收到货后不满意可以向平台申请退款，申诉等功能</p><p>7，本人是个人开发者，原本想用于校园创业，由于已是大三，没有更多是时间用于平台的管理和推广，目前靠平台快递代拿赚取一点利润，如果您购买我的代码，在遇到问题时，可以随时找我，我会尽力解决代码上的问题，感谢您的支持！</p>",
        project_display:[
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        ],
        project_experience:"https://pan.baidu.com/s/1wiEpzbxikvro1m2UbKKl5g 提取码：00bw",
        platform_id:platform_id,
        type_id:type_id,//管理
        codetype_id:codetype_id,//源码类型
    },(err,data)=>{
        if(!err) console.log(data,"插入成功")
        else console.log(err,"插入失败")

    })

     */
    ctx.body="shop"
})
router.get('/add',async (ctx)=>{

})
router.get('/edit',async (ctx)=>{
    ctx.body="user/edit"
})
router.get('/delete', async (ctx)=>{
    ctx.body="user/delete"
})
module.exports=router.routes()

