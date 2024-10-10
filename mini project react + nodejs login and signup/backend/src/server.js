const express=require('express');
const router=require('./router')
const cors=require('cors')
const app=express();
const port=3005
app.use(express.json());
app.use(cors());

app.use("/app",router);
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})