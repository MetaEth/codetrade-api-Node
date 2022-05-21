var router=require('koa-router')()
var All_vipOrder=require('../../module/all_viporder')
var All_shopOrder=require('../../module/all_shoporder')
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
  var payMoney=Number(ctx.request.body.payMoney).toFixed(2)*100
  console.log(ctx.request.body.payMoney,payMoney,typeof payMoney)
  var description=ctx.request.body.description
  var payType=ctx.request.body.payType
  var out_trade_no=randomStr()
  const params = {
    description: description,
    out_trade_no: out_trade_no,
    notify_url: Wx_Secret.notify_url,
    attach:payType,//用于判断是shoporder还是viporder
    amount: {
      total: parseInt(payMoney)
    },
  };
  const result = await pay.transactions_native(params);
  result.order_id=out_trade_no,
  ctx.body=result
})
router.post('/all_shoporder',async (ctx)=>{
  var object=ctx.request.body
  var result=await All_shopOrder.create(object)
  ctx.body=result
})
router.post('/all_viporder',async (ctx)=>{
  var object=ctx.request.body
  var result=await All_vipOrder.create(object)
  ctx.body=result
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

