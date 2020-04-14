const express =require('express'),
router = express.Router();
const portfoliocontroller=require('../controller/portfoliocontroller');
router.get('/',portfoliocontroller.portfolio);

module.exports=router;
