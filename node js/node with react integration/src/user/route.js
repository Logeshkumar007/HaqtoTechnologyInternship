const express=require('express');
const {getusercontroller, getusercontroller2, addusercontroller, deletecontroller }= require('./controller');
const router=express.Router();
router.get("/getuser",getusercontroller2)
router.post("/adduser",addusercontroller);
router.delete('/deleteuser/:name',deletecontroller);
module.exports=router;