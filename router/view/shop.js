var router=require('koa-router')()
let Shop=require('../../module/shop')
//查找所有数据
router.get('/find',async (ctx)=>{
    var get_data=ctx.query
    //查找上架的
    get_data.is_sale=true
    //如果price存在，转换成json对象
    if(get_data.price){
        get_data.price=JSON.parse(get_data.price)
    }
    var skip=Number(get_data.skip) //跳过查找,这里的skip是Number类型
    delete get_data.skip
    console.log(get_data,"shop")
    console.log(skip,"skip")
    let result=await Shop.find(get_data).skip(skip).limit(20).populate('platform_id type_id').select('-download_links').sort({"shop_sort":-1})
    ctx.body=result

})
router.get('/findOne',async (ctx)=>{
    var get_id=ctx.query.id
    let result=await Shop.findOne({_id:get_id}).populate('platform_id type_id codetype_id').select('-download_links')
    ctx.body=result
})

module.exports=router.routes()

