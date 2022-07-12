# 校园闲鸭API（Node实现）

#### 产品介绍
+ 校园闲鸭API接口实现

#### 服务端源码地址
> 项目前端：https://github.com/MetaEth/codetrade-views

> 项目后台：https://github.com/MetaEth/codetrade-admin

> 项目API接口-->Java版本：https://github.com/MetaEth/codetrade-api-Java

#### 项目说明
>  项目详细说明请查看：https://github.com/MetaEth/codetrade-views

#### 技术栈
node + koa + mongodb

#### 环境搭建

> a，配置mongodb数据库，导入数据
```xml
# 在本地Mongo新建数据库tradecode
# 在mongo_data目录下的数据文件，分批导入数据库tradecode
```
<img src="https://files.idleduck.cn/picture/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220712195727.png" width="100%"/>

> b，在目录utils下配置为自己的apiclient_cert.pem和apiclient_key.pem文件
```xml
# 登入微信商用户支付，下载cert和key文件
```
> c，配置腾讯云短信验证
```js
# 在目录api/tencentcloud.js，把短信id配置为自己的
if(smsType=="register"){
    //注册
    var TemplateId="1375693"
    var TemplateParamSet=[code,"15"]
}else if(smsType=="resetPassword"){
    //重置密码
    var TemplateId="1375694"
    var TemplateParamSet=[code]
}
```
<img src="https://files.idleduck.cn/picture/FireShot%20Webpage%20Screenshot%20%23263%20-%20%27%E6%AD%A3%E6%96%87%E6%A8%A1%E6%9D%BF%E7%AE%A1%E7%90%86%20-%20%E5%9B%BD%E5%86%85%E7%9F%AD%E4%BF%A1%20-%20%E7%9F%AD%E4%BF%A1%20-%20%E6%8E%A7%E5%88%B6%E5%8F%B0%27%20-%20console.cloud.tencent.com.png" width="100%"/>

> d，在目录utils/Wx_Secret.js配置为自己的私密数据
```js
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

```

#### 项目使用

``` bash
# 克隆项目
git clone https://github.com/MetaEth/codetrade-api-Node.git

# 进入项目目录
cd codetrade-api-Node

# 安装依赖
npm install

# 启动服务
node app.js

```

