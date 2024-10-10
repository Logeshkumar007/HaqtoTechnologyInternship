var mysql=require("mysql");
var con=mysql.createConnection(
    {
    host:"localhost",
    user:"root",
    password:"mskl2004",
    database:"nodejs"
    }
);
con.connect((error)=>{
    if(error) throw error;
    else
    {
        console.log("connected to mysql");
    }
})
module.exports=con;