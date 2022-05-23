//服务器回调通知，
var router=require('koa-router')()
let Wx_Secret=require('../../utils/Wx_Secret')
const WxPay = require('wechatpay-node-v3')
const fs=require('fs')
const All_shopOrder=require("../../module/all_shoporder")
const All_vipOrder=require("../../module/all_viporder")
const vipOrder=require("../../module/viporder")
const shopOrder=require("../../module/shoporder")
const User=require("../../module/user")
//映入socket.io模块
const Socket=require("../../app")
const pay = new WxPay({
    appid: Wx_Secret.AppID,
    mchid: Wx_Secret.mch_id,
    publicKey: fs.readFileSync('./utils/apiclient_cert.pem'), // 公钥
    privateKey: fs.readFileSync('./utils/apiclient_key.pem'), // 秘钥
});
router.post('/',async (ctx)=>{
    try{
        var ciphertext=ctx.request.body.resource.ciphertext
        var associated_data=ctx.request.body.resource.associated_data
        var nonce=ctx.request.body.resource.nonce
        var key=Wx_Secret.APIv3
        const result = pay.decipher_gcm(ciphertext, associated_data, nonce, key);
        var orderId=result.out_trade_no
        if(result.attach=="shopPay"){
            //all_shopPay表查询并插入数据
            var object=await All_shopOrder.findOne({orderId:orderId})
            var params={
                own: object.own,
                shop: object.shop,
                orderId: object.orderId,
                shopMoney: object.shopMoney,
                payMoney: object.payMoney,
                remarks: object.remarks
            }
            await shopOrder.create(params)
            //向客户端发送支付成功通知
            Socket.io.to(object.socketId).emit('payStatus',{"code": "200", "message": "支付成功","socketId":object.socketId})
        }else if(result.attach=="vipPay"){
            //all_viporder表查询并插入数据
            var object=await All_vipOrder.findOne({orderId:orderId})
            var params={
                own: object.own,
                orderId: object.orderId,
                payMoney: object.payMoney,
                vipType:object.vipType,
                vipAt: object.vipAt,
                remarks: object.remarks
            }
            await vipOrder.create(params)
            await User.updateOne({vip_type:object.vipType,vipAt:object.vipAt})
            //向客户端发送支付成功通知
            Socket.io.to(object.socketId).emit('payStatus',{"code": 200, "message": "支付成功","socketId":object.socketId})
        }
        console.log(result,"解密的数据")
        ctx.body={"code":"SUCCESS","message": "ok"}
    }catch (err){
        ctx.body="非法请求"
    }
})
module.exports=router.routes()
