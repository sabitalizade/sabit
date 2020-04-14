const express=require('express');
const router=express.Router();
const readmorecontroller=require('../controller/readmorecontroller');

router.get('/',readmorecontroller.readmore);

module.exports=router;