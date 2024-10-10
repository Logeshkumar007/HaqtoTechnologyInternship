import express from 'express';
const app=express();

import router from "./src/user/route.js";
app.use("/app",router);


const port=3000;

app.listen(port,()=>{
    console.log("server is running on port 3000");
})