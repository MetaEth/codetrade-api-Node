var router=require('koa-router')()
let Shop=require('../../module/shop')
var asyncFuncone = function(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var shop_name=`${name}`
            var codetype_id="6249aa8980080000d7005e32"
            var platform_id="624a7593e1f2ee47a86511fe"
            var type_id="624004fc0085321f50bf49e2"
            Shop.create({
                shop_name:shop_name,
                picture:`https://files.idleduck.cn/public/${name}/picture.png`,
                price:1.00,
                label:["生活","工具","效率"],
                project_introduce:"",
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
        }, 100);
    });
}

router.get('/',async (ctx)=>{
    for(let i=0;i<120;i++){
        //await asyncFuncone(i);

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
        download_links:get_data.file[0],
        label:get_data.valueLable,
        shop_sort:get_data.valueDate,
        project_display:get_data.project_display,
        project_experience:get_data.projectExperience,
        project_introduce:get_data.project_introduce
    })
    ctx.body=result
})
module.exports=router.routes()

