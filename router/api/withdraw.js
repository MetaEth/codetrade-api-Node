const router = require('koa-router')()
const cryptoMO = require('crypto'); // MD5算法
const request = require("request");
const fs = require('fs')
const xml2js = require('xml2js');	//引入xml解析模块
//引入小程序密钥
let Wx_Secret=require('../../utils/Wx_Secret')
router.post('/', async function (ctx) {    //小程序提现
  var openid = ctx.request.body.openid;
  var totalfee = ctx.request.body.money*100; // 订单价格 单位是 元
  var re_user_name = ctx.request.body.user_name //收款用户名

  //var spbillip = req.ip.replace('::ffff:', ''); // 获取客户端ip
  var spbillip = Wx_Secret.Ip
  var appid = Wx_Secret.AppID;
  var mchid = Wx_Secret.mch_id;
  var mch_my = Wx_Secret.mch_key;
  var body ="提现成功"; // 商品描述
  var notifyurl = 'https://www.banjingkeji.com/wxpay'; // 支付成功的回调地址  可访问 不带参数
  var noncestr = getNonceStr(); // 随机字符串
  var outtrade_no = getWxPayOrdrID(); // 商户订单号
  var timestamp = Math.round(new Date().getTime() / 1000); // 当前时间
  var checkname = "FORCE_CHECK"; //校验用户名
  var sign = paysignjsapi(
      appid, //appid
      body, //描述
      mchid, //商户id
      noncestr, //随机字符串
      openid, //用户id
      checkname, //// 校验用户名
      re_user_name, // 校验收款用户名
      outtrade_no, //订单号
      spbillip, //请求端IP地址
      totalfee, //订单价格,分
      mch_my //商户密钥
  );
  var bodyData = '<xml>';
  bodyData += '<mch_appid>' + appid + '</mch_appid>';  /* 小程序ID*/
  bodyData += '<mchid>' + mchid + '</mchid>'; // 商户号
  bodyData += '<nonce_str>' + noncestr + '</nonce_str>'; // 随机字符串
  bodyData += '<partner_trade_no>' + outtrade_no + '</partner_trade_no>'; // 商户订单号
  bodyData += '<openid>' + openid + '</openid>'; // 用户标识
  bodyData += '<check_name>' + checkname + '</check_name>'; // 校验用户
  bodyData += '<re_user_name>' + re_user_name + '</re_user_name>'; // 校验用户名
  bodyData += '<amount>' + totalfee + '</amount>'; // 总金额 单位为分
  bodyData += '<desc>' + body + '</desc>'; // 商品描述
  bodyData += '<spbill_create_ip>' + spbillip + '</spbill_create_ip>'; // 终端IP
  bodyData += '<sign>' + sign + '</sign>'; //签名
  bodyData += '</xml>';

  var urlStr = "https://api.mch.weixin.qq.com/mmpaymkttransfers/promotion/transfers"
  //console.log(bodyData + "传入的参数")

  // cert: fs.readFileSync("./config/apiclient_cert.pem"),
  //key: fs.readFileSync("./config/apiclient_key.pem"),
  let result=await new Promise((resolve, reject) => {
    request({
      url: urlStr,
      method: 'POST',
      body: bodyData,
      agentOptions: {
        cert: fs.readFileSync("/home/star/Desktop/koa-delivery/utils/apiclient_cert.pem"),
        key: fs.readFileSync("/home/star/Desktop/koa-delivery/utils/apiclient_key.pem"),
        //或者使用pfx 属性来替换 cert和 key 使用私钥时,证书和ca证书在PFX或PKCS12 格式的文件中:
        //pfx: fs.readFileSync("./config/apiclient_cert.p12"),
        passphrase: mchid
      }
    }, function(error, response, body) {
      if(!error && response.statusCode == 200) {
        xml2js.parseString(body,function(error,result){
          let reData = result.xml;
          resolve({status:"SUCCESS",data:reData})
        })
      } else {
        reject({status:"FAIL"})
        console.log("失败")
      }
    })
  })
  if(result.status=="SUCCESS" && result.data.result_code[0]=="SUCCESS"){
    ctx.body={status:"SUCCESS"}

  }else{
    ctx.body={status: "FAIL"}
  }
})
function paysignjsapi(appid, body, mchid, noncestr, openid, checkname, re_user_name, outtrade_no, spbillip, totalfee, mch_my) {
  var ret = {
    mch_appid: appid,
    desc: body,
    mchid: mchid,
    nonce_str: noncestr,
    openid: openid,
    check_name: checkname,
    re_user_name: re_user_name,
    partner_trade_no: outtrade_no,
    spbill_create_ip: spbillip,
    amount: totalfee
  };

  var str = raw(ret);
  str = str + '&key=' + mch_my;
  var md5Str = cryptoMO.createHash('md5').update(str).digest('hex');
  md5Str = md5Str.toUpperCase();
  return md5Str;
}

function raw(args) {
  var keys = Object.keys(args);
  keys = keys.sort();
  //console.log(keys + "排序")
  var newArgs = {};
  keys.forEach(function(key) {
    newArgs[key.toLowerCase()] = args[key];
  });
  var str = '';
  for(var k in newArgs) {
    str += '&' + k + '=' + newArgs[k];
  }
  str = str.substr(1);
  return str;
}
//生成一串随机字符串
function getNonceStr() {
  return Math.random().toString(36).substr(2, 15);
}
/*生成商户订单号(由当前时间组成的一串数字)*/
function getWxPayOrdrID() {
  var myDate = new Date();
  var year = myDate.getFullYear();
  var mouth = myDate.getMonth() + 1;
  var day = myDate.getDate();
  var hour = myDate.getHours();
  var minute = myDate.getMinutes();
  var second = myDate.getSeconds();
  var msecond = myDate.getMilliseconds(); //获取当前毫秒数(0-999)
  if(mouth < 10) { /*月份小于10  就在前面加个0*/
    mouth = String(String(0) + String(mouth));
  }
  if(day < 10) { /*日期小于10  就在前面加个0*/
    day = String(String(0) + String(day));
  }
  if(hour < 10) { /*时小于10  就在前面加个0*/
    hour = String(String(0) + String(hour));
  }
  if(minute < 10) { /*分小于10  就在前面加个0*/
    minute = String(String(0) + String(minute));
  }
  if(second < 10) { /*秒小于10  就在前面加个0*/
    second = String(String(0) + String(second));
  }
  if(msecond < 10) {
    msecond = "00" + msecond;
  } else if(msecond >= 10 && msecond < 100) {
    msecond = "0" + msecond;
  }
  var currentDate = String(year) + String(mouth) + String(day) + String(hour) + String(minute) + String(second) + String(msecond);
  return currentDate;
}
module.exports=router.routes()
