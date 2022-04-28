var router=require('koa-router')()
const tencentcloud = require("tencentcloud-sdk-nodejs")
var credential=require('../../utils/Wx_Secret').credential
// 导入对应产品模块的client models。

router.get('/',async (ctx)=>{
    console.log(ctx.session)
})
router.get('/sendsms',async (ctx)=>{
    var code=Math.random().toString().slice(-6)
    var smsType=ctx.query.smsType
    if(smsType=="register"){
        //注册
        var TemplateId="1375693"
        var TemplateParamSet=[code,"15"]
    }else if(smsType=="resetPassword"){
        //重置密码
        var TemplateId="1375694"
        var TemplateParamSet=[code]
    }

    var phone=ctx.query.phone
    const smsClient = tencentcloud.sms.v20210111.Client
    const client = new smsClient({
        credential: {
            secretId: credential.secretId,
            secretKey: credential.secretKey
        },
        region: "ap-guangzhou",
        profile: {
            signMethod: "HmacSHA256",
            httpProfile: {
                reqMethod: "POST",
                reqTimeout: 30,
                endpoint: "sms.tencentcloudapi.com"
            },
        },
    })
    const params = {
        /* 短信应用ID: 短信SmsSdkAppId在 [短信控制台] 添加应用后生成的实际SmsSdkAppId，示例如1400006666 */
        // 应用 ID 可前往 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage) 查看
        SmsSdkAppId: "1400667461",
        /* 短信签名内容: 使用 UTF-8 编码，必须填写已审核通过的签名 */
        SignName: "欧莉丝商贸有限公司",
        /* 模板 ID: 必须填写已审核通过的模板 ID */
        TemplateId: TemplateId,
        /* 模板参数: 模板参数的个数需要与 TemplateId 对应模板的变量个数保持一致，若无模板参数，则设置为空 */
        TemplateParamSet: TemplateParamSet,//传入验证码
        /* 下发手机号码，采用 e.164 标准，+[国家或地区码][手机号]
         * 示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号，最多不要超过200个手机号*/
        PhoneNumberSet: [`+86${phone}`],//传入手机号
        /* 用户的 session 内容（无需要可忽略）: 可以携带用户侧 ID 等上下文信息，server 会原样返回 */
        SessionContext: "",
        /* 短信码号扩展号（无需要可忽略）: 默认未开通，如需开通请联系 [腾讯云短信小助手] */
        ExtendCode: "",
        /* 国际/港澳台短信 senderid（无需要可忽略）: 国内短信填空，默认未开通，如需开通请联系 [腾讯云短信小助手] */
        SenderId: "",
    }
    // 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
    var result=await new Promise((resolve, reject) => {
        // 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
        client.SendSms(params, function (err, response) {
            // 请求异常返回，打印异常信息
            if (err) {
                console.log(err)
                reject({code: 400, message: '短信发送失败'})
            }else {
                resolve(smsStatus={code: 200, message: '短信发送成功'})
            }
        })

    })
    if(result.code==200){
        ctx.session.phone=phone
        ctx.session.code=code
    }
    ctx.body=result
})
module.exports=router.routes()
