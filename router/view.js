var router=require('koa-router')()
var user=require('./view/user')
var Shop=require('./view/shop')
var Type=require('./view/type')
var Platform=require('./view/platform')
var codeType=require('./view/codetype')
var shopOrder=require('./view/shoporder')



router.use('/user',user)
router.use('/shop',Shop)
router.use('/type',Type)
router.use('/platform',Platform)
router.use('/codetype',codeType)
router.use('/shoporder',shopOrder)
module.exports=router
