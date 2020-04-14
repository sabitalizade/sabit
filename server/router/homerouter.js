const express =require('express'),
router = express.Router();
const homecontroller=require('../controller/homecontroller');
router.get('/',homecontroller.home);

module.exports=router;
