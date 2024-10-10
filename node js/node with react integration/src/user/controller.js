const {addmodel,getusermodel, deletemodel}=require('./model');
const getusercontroller=(req,res)=>{
    res.json({name:"logesh"});
}
const getusercontroller2=async(req,res)=>{
    try{
        const f=await getusermodel();
        res.json(f);
        console.log(f);
    }
    catch(error)
    {
        console.log(error);
    }
}
const addusercontroller=async(req,res)=>{
    try{
        const f=req.body;
        console.log(f);
        addmodel(f);
    }
    catch(error)
    {
        console.log(error);
    }
}
const deletecontroller=async (req,res)=>{
    try{
        const {name}=req.params;
        console.log("controller")
        console.log(name);
        deletemodel(name)
    }
    catch(err)
    {
        console.log(err);
    }
}
module.exports={deletecontroller,getusercontroller,getusercontroller2,addusercontroller}