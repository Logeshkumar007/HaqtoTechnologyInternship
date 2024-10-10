const express=require("express");
const app=express();
const con=require('./mysqlconnection');
app.get('/', (req, res) => {
    res.send('Hddddi');
  });
  module.exports=app;

app.get('/users',(req,res)=>{
    con.query('select *from user',(error,results)=>{
        if(error){ 
            throw error;
        }
        res.json(results);
    })
})
module.exports=app;