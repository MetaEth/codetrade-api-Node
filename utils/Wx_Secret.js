exports.AppID="wx32675361658fe440"//小程序appid
exports.AppSecret="f71db0aa75db8919e79eb3ddbfe0e472"//小程序密钥
exports.mch_id="1622398985"//商用户号
exports.mch_key="AA1114221010AA111422101005143033"//商用户密钥
exports.Ip="172.25.6.34"//调用提现的IP地址
exports.notify_url="https://www.idleduck.cn/api/notify_url"  //支付回调通知地址
exports.APIv3="AA1114221010AA111422101005143033" //v3key,用于回调通知时使用
exports.tokenConfig={privateKey: '1114221010'}    //jwt的token秘钥
//腾讯云cos存储对象秘钥
exports.cosCredential={
    SecretId: "AKID50sXv3tSklX2GEwNXQ38xVmnX0C8m9F5",
    SecretKey: "atvgBPM1QYOxGI3XkhNltlMhma7NM9fu",
    Bucket: "idleduck-1311335507",
    Region: "ap-guangzhou"  //cos的地区
}
//后台登入用户名和密码，生成token
exports.adminLogin={
    username:"admin",          //后台登入用户名
    password:"Az1114221010"    //后台登入密码
}

