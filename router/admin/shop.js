var router=require('koa-router')()
let Shop=require('../../module/shop')
var asyncFuncone = function(i) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var shop_name=`项目网站旅游${i}`
            var codetype_id="6249aa8980080000d7005e32"
            var platform_id="624a7593e1f2ee47a86511fe"
            var type_id="624004fc0085321f50bf49e2"
            Shop.create({
                shop_name:shop_name,
                picture:"https://www.sonorous.icu/wp-content/uploads/2022/03/cropped-jarrod-terry-simpsons.jpg",
                price:0.3,
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
var asyncFunctwo = function(i) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var shop_name=`模板app管理${i}`
            var codetype_id="6247f7dc31baa658dc25be1b"
            var platform_id="624a7595e1f2ee47a86511ff"
            var type_id="624004fc0085321f50bf49e7"
            Shop.create({
                shop_name:shop_name,
                picture:"https://www.sonorous.icu/wp-content/uploads/2022/03/cropped-jarrod-terry-simpsons.jpg",
                price:0.1,
                label:["app","管理","效率"],
                project_introduce:"<p>1，此项目可以用于校园创业，直接商用，或者用于个人学习，功能强大，代码量超过2万行，并且每个校园的业务都是互相独立的，</p><p>2，用户发布物品时，支持发布视频，图片等，</p><p>3，用户可以发布论坛，支持视频（视频封面的问题已处理），图片，文字等，管理员可以对论坛进行管</p><p>4，用户发布拼车，可以删除或隐藏拼车信息</p><p>5，该项目支持校园快递代拿，用户上传快递代拿的信息，平台可以帮送（赚取利润）</p><p>6，闲置物品交易模式类似咸鱼，买家下单后，会推送卖家信息模板给卖家，并且发送短信通知卖家发货，买家收到货后不满意可以向平台申请退款，申诉等功能</p><p>7，本人是个人开发者，原本想用于校园创业，由于已是大三，没有更多是时间用于平台的管理和推广，目前靠平台快递代拿赚取一点利润，如果您购买我的代码，在遇到问题时，可以随时找我，我会尽力解决代码上的问题，感谢您的支持！</p>",
                project_display:[
                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                ],
                project_experience:"https://pan.baidu.com/s/1wiEpzbxikvro1m2UbKKl5g 提取码：00bw",
                is_complete:false,
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
var asyncFuncthree = function(i) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var shop_name=`模板小程序校园${i}`
            var codetype_id="6247f7dc31baa658dc25be1b"
            var platform_id="624a756c58ef1b1ad8ba4800"
            var type_id="624004fc0085321f50bf49db"
            Shop.create({
                shop_name:shop_name,
                picture:"https://www.sonorous.icu/wp-content/uploads/2022/03/cropped-jarrod-terry-simpsons.jpg",
                price:50,
                label:["校园","跑腿","效率"],
                project_introduce:"<p>1，此项目可以用于校园创业，直接商用，或者用于个人学习，功能强大，代码量超过2万行，并且每个校园的业务都是互相独立的，</p><p>2，用户发布物品时，支持发布视频，图片等，</p><p>3，用户可以发布论坛，支持视频（视频封面的问题已处理），图片，文字等，管理员可以对论坛进行管</p><p>4，用户发布拼车，可以删除或隐藏拼车信息</p><p>5，该项目支持校园快递代拿，用户上传快递代拿的信息，平台可以帮送（赚取利润）</p><p>6，闲置物品交易模式类似咸鱼，买家下单后，会推送卖家信息模板给卖家，并且发送短信通知卖家发货，买家收到货后不满意可以向平台申请退款，申诉等功能</p><p>7，本人是个人开发者，原本想用于校园创业，由于已是大三，没有更多是时间用于平台的管理和推广，目前靠平台快递代拿赚取一点利润，如果您购买我的代码，在遇到问题时，可以随时找我，我会尽力解决代码上的问题，感谢您的支持！</p>",
                project_display:[
                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                ],
                project_experience:"https://pan.baidu.com/s/1wiEpzbxikvro1m2UbKKl5g 提取码：00bw",
                is_complete:false,
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
var asyncFuncfour = function(i) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var shop_name=`项目其他校园${i}`
            var codetype_id="6249aa8980080000d7005e32"
            var platform_id="624a75a6e1f2ee47a8651200"
            var type_id="624004fc0085321f50bf49db"
            Shop.create({
                shop_name:shop_name,
                picture:"https://www.sonorous.icu/wp-content/uploads/2022/03/cropped-jarrod-terry-simpsons.jpg",
                price:0.2,
                label:["校园","跑腿","效率"],
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
    for(let i=0;i<120;i++){
        //await asyncFuncone(i);
        if (i%2==0){
            await asyncFuncone(i);
            console.log("one",i)
        }else if(i%3==0){
            await asyncFunctwo(i);
            console.log("two",i)
        }else if(i%5==0){
            await asyncFuncthree(i);
            console.log("three",i)
        }else if(i%7==0){
            await asyncFuncfour(i);
            console.log("four",i)
        }
    }
    ctx.body="shop"
})
router.post('/count',async (ctx)=>{
    var get_data=ctx.request.body
    //删除 page和pageSize
    delete get_data.pageSize
    delete get_data.page
    var result=await Shop.find(get_data).count();
    ctx.body=result
})
router.post('/find',async (ctx)=>{
    var pageSize=ctx.request.body.pageSize
    var page=ctx.request.body.page
    var skip=(page-1)*pageSize
    var result=await Shop.find().skip(skip).limit(pageSize).populate('codetype_id platform_id type_id').sort({"shop_sort":-1})
    ctx.body=result
})
router.post('/deleteOne',async (ctx)=>{
    var id=ctx.request.body.id
    var result=await Shop.deleteOne({_id:id})
    ctx.body=result
})
router.post('/insertOne',async (ctx)=>{
    var get_data=ctx.request.body
    var result=await Shop.create({
        shop_name:get_data.shop_name,
        picture:get_data.picture[0],
        price:Number(get_data.price).toFixed(2),
        is_complete:get_data.valueCodeType,
        codetype_id:get_data.valueType[0],
        platform_id:get_data.valueType[1],
        type_id:get_data.valueType[2],
        download_link:get_data.download_link,
        label:get_data.valueLable,
        shop_sort:get_data.valueDate,
        project_display:get_data.project_display,
        project_experience:get_data.projectExperience,
        project_introduce:get_data.project_introduce
    })
    ctx.body=result
})
module.exports=router.routes()

