const express=require('express');
const router=require('./user/route')
const cors=require('cors')
const bodyParser = require("body-parser");
const app=express();
const port=3000



app.use(cors());
// app.use(express.json);
// app.use(express.json());
app.use(bodyParser.json());
app.use("/app",router)
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

module.exports=app