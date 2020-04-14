const express =require('express'),
router = express.Router();
const aboutcontroller=require('../controller/aboutcontroller');

router.get('/about',aboutcontroller.about);

module.exports=router;
