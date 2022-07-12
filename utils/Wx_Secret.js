exports.AppID=""                   //开通微信支付小程序appid
exports.AppSecret=""               //小程序密钥
exports.mch_id=""                  //微信商用户号
exports.mch_key=""                 //商用户密钥
exports.Ip=""                      //调用提现的IP地址，可以不填写
exports.notify_url=""              //微信支付回调通知地址
exports.APIv3=""                   //微信v3key,用于回调通知时使用
//jwt的token秘钥
exports.tokenConfig={              
    privateKey: ''
}    
//腾讯云cos存储对象秘钥
exports.cosCredential={
    SecretId: "",
    SecretKey: "",
    Bucket: "",
    Region: ""                   //cos的地区
}
//后台登入用户名和密码，生成token
exports.adminLogin={
    username:"",                 //后台登入用户名
    password:""                  //后台登入密码
}
