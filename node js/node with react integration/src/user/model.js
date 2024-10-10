const con=require('./mysqlconnection')
const getusermodel=async()=>{
    try{

        const [rows]=await con.promise().query("select *from user");
        return rows;
    }
    catch(err)
    {
        console.log(err);
        throw err;
    }
}
const addmodel=async(data)=>{
    try{
        const [rows]=await con.promise().query("insert into user values(?,?)",[data.name,data.age]);
        return rows;
    }
    catch(err)
    {

    }
}
const deletemodel=async(name)=>{
    try{
        console.log(name);
        const [rows]=await con.promise().query("delete  from user where name=?",[name])

    }
    catch(err)
    {
        console.log(err);
    }
}
module.exports={getusermodel,addmodel,deletemodel}