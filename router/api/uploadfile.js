var router=require('koa-router')()
router.post('/', async (ctx, next) => {
    var file=ctx.request
    console.log(file,"file")
    // 上传单个文件
    // const file = ctx.request.files.file; // 获取上传文件
    // console.log(file,"file")
    // // 创建可读流
    // const reader = fs.createReadStream(file.path);
    // let filePath = path.join(__dirname, 'public/upload/') + `/${file.name}`;
    // // 创建可写流
    // const upStream = fs.createWriteStream(filePath);
    // // 可读流通过管道写入可写流
    // reader.pipe(upStream);
    ctx.body = "上传成功！";
});
module.exports=router.routes()
