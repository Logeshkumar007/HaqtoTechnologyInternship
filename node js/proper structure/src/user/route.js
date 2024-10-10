import express from 'express'
import {getuser} from './controller.js'
const  router=express.Router();

router.get('/',getuser);
export default router;
