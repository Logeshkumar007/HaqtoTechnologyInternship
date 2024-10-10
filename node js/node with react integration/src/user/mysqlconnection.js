const mysql=require('mysql2');
const con=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'mskl2004',
        database:'nodejs'
    }
)
con.connect((err)=>{
    if(err) throw err;
    else
    {
        console.log('connected to database');
    }
})
module.exports=con