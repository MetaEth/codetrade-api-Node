var router=require('koa-router')()
var User=require('../../module/user')
var VipOrder=require('../../module/viporder')
let Wx_Secret=require('../../utils/Wx_Secret')
const WxPay = require('wechatpay-node-v3')
const fs=require('fs')
const pay = new WxPay({
  appid: Wx_Secret.AppID,
  mchid: Wx_Secret.mch_id,
  publicKey: fs.readFileSync('./utils/apiclient_cert.pem'), // 公钥
  privateKey: fs.readFileSync('./utils/apiclient_key.pem'), // 秘钥
});
router.get('/payfind',async (ctx)=>{
  const result = await pay.query({out_trade_no: '1217752501201407033233368012'});
  ctx.body=result
})
router.post('/wechatpay',async (ctx)=>{
  var payMoney=ctx.request.body.payMoney*100
  var description=ctx.request.body.description
  var out_trade_no=randomStr()
  console.log(out_trade_no,"pp")
  const params = {
    description: description,
    out_trade_no: out_trade_no,
    notify_url: Wx_Secret.notify_url,
    amount: {
      total: payMoney,
    },
    // scene_info: {
    //   payer_client_ip: 'ip',
    // },
  };
  const result = await pay.transactions_native(params);
  ctx.body=result
  console.log(result)
})

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
function randomStr(){	//产生一个随机字符串
  var str = "";
  var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  for(var i=1;i<=32;i++){
    var random = Math.floor(Math.random()*arr.length);
    str += arr[random];
  }
  return str;
}
module.exports=router.routes()

