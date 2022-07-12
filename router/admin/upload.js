var router=require('koa-router')()
var COS = require('cos-nodejs-sdk-v5');
const fs = require("fs");
let cosCredential=require('../../utils/Wx_Secret').cosCredential
var cos = new COS({
    SecretId: cosCredential.SecretId,
    SecretKey: cosCredential.SecretKey
});
router.post('/shop_picture', async (ctx, next) => {
    const file = ctx.request.files.file; // 获取上传文件
    var result= await new Promise(((resolve, reject) => {
        cos.putObject({
            Bucket: cosCredential.Bucket, /* 必须 */
            Region: cosCredential.Region,    /* 必须 */
            Key: `/picture/${file.originalFilename}`,              /* 必须 */
            Body: fs.createReadStream(file.filepath), // 上传文件对象
            Headers: {
                'Content-Type':'image/png' //设置文件请求头，可以在线浏览
            },
            onProgress: function(progressData) {
                //console.log(JSON.stringify(progressData));
            }
        }, function(err, data) {
            if(data){resolve(data)}
            else reject(err)
        });
    }))
    if(result.statusCode==200){
        console.log(result,"图片")
        ctx.body={code:200,picture:"https://files.idleduck.cn/picture/"+file.originalFilename}
    }else{
        ctx.body={code:400,msg:"图片存入出错"}
    }
});
router.post('/download_link',async (ctx)=>{
    const file = ctx.request.files.file; // 获取上传文件
    var timestamp = new Date().getTime()
    console.log(`/file/project@${file.originalFilename.split(".")[0]}-${timestamp}.${file.originalFilename.split(".")[1]}`,"nihk")
    var result= await new Promise(((resolve, reject) => {
        cos.putObject({
            Bucket: cosCredential.Bucket, /* 必须 */
            Region: cosCredential.Region,    /* 必须 */
            Key: `/file/${file.originalFilename.split(".")[0]}-${timestamp}.${file.originalFilename.split(".")[1]}`,              /* 必须 */
            Body: fs.createReadStream(file.filepath), // 上传文件对象
            onProgress: function(progressData) {
                //console.log(JSON.stringify(progressData));
            }
        }, function(err, data) {
            if(data){resolve(data)}
            else reject(err)
        });
    }))
    if(result.statusCode==200){
        ctx.body={code:200,download_link:"https://files.idleduck.cn/file/"+file.originalFilename.split(".")[0]+"-"+timestamp+"."+file.originalFilename.split(".")[1]}
    }else{
        ctx.body={code:400,msg:"文件存入出错"}
    }
})
router.post('/project_display',async (ctx)=>{
    const file = ctx.request.files.file; // 获取上传文件
    var result= await new Promise(((resolve, reject) => {
        cos.putObject({
            Bucket: cosCredential.Bucket, /* 必须 */
            Region: cosCredential.Region,    /* 必须 */
            Key: `/picture/${file.originalFilename}`,              /* 必须 */
            //FilePath:'./picture/',
            Body: fs.createReadStream(file.filepath), // 上传文件对象
            Headers: {
                'Content-Type':'image/png' //设置文件请求头，可以在线浏览
            },
            onProgress: function(progressData) {
                //console.log(JSON.stringify(progressData));
            }
        }, function(err, data) {
            if(data){resolve(data)}
            else reject(err)
        });
    }))
    if(result.statusCode==200){
        ctx.body={code:200,project_display:"https://files.idleduck.cn/picture/"+file.originalFilename}
    }else{
        ctx.body={code:400,msg:"文件存入出错"}
    }
})
module.exports=router.routes()
