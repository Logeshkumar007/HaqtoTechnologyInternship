import mysql from 'mysql2';
const con=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:"mskl2004",
        database:"nodejs"

    }
);
con.connect((error)=>{
    if(error) throw error;
    else{
        console.log("connected to database");
    }
})
export default con;
