const mysql=require('mysql2');
const con=mysql.createConnection(
    {  
        host:'localhost',
        user:'root',
        password:'mskl2004',
        database:'nodejs'
    }
)
con.connect(()=>{
    console.log('connected to db');
})
module.exports=con