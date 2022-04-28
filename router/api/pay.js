var router=require('koa-router')()
var User=require('../../module/user')
var VipOrder=require('../../module/viporder')
router.post('/',async (ctx)=>{
  var object=ctx.request.body
  var ownId= object.own
  var userUpdate={vip_type: object.vip_type,vipAt: object.vipAt}
  var vipOrder={
    own:object.own,
    orderId:object.orderId,
    payMoney:object.payMoney,
    vipType:object.vip_type,
    remarks:object.remarks
  }
  var resultOne= await User.updateOne({_id:ownId},userUpdate)
  var resultTwo=await VipOrder.create(vipOrder)
  console.log(object,"data")
  console.log(resultTwo,"data")
  ctx.body={status: 200, message: '支付成功', data: {user:resultOne,vip:resultTwo}}
})
module.exports=router.routes()

