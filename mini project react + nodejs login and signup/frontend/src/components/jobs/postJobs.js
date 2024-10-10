import { Button, Paper, TextareaAutosize, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const PostJobs = () => {
    const nav=useNavigate();
    const [title,setTitle]=useState("");
    const [jobDecription,setJobDecription]=useState("");
    const [postedOn,setPostedOn]=useState(new Date());
    const [experience,setExperience]=useState("");
    const [companyname,setCompanyname]=useState("");
    useEffect((e)=>{
        console.log("useEffect");
        console.log(postedOn);
},[postedOn])
    const handleSubmit=async(e)=>{
        try{

            e.preventDefault();
            const response=await axios.post("http://localhost:3005/app/post/jobs",{
                title:title,
                jobDecription:jobDecription,
                postedOn:postedOn,
                experience:experience,
                companyname:companyname
            })
            console.log(response);
            nav("/jobs");
        }
        catch(err)
        {
            console.log(err);
        }
    }
  return (
      
      <form onSubmit={handleSubmit}>
    <div style={{display:"flex",
        flexDirection:"column",
        alignContent:"center",alignItems:"center",
        height:"100dvh",
        backgroundImage:'url("https://img.freepik.com/free-vector/winter-blue-pink-gradient-background-vector_53876-117275.jpg")',
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"


    }}
        
        >

      <h1 style={{marginTop:"5dvh"}}>Post Jobs</h1>
      <Paper
        elevation={5}
        sx={{
            width: "40%",
            padding: "3dvh",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            paddingTop:"6dvh",
            paddingBottom:"6dvh",
            borderRadius:"2dvh",
            marginTop:"6dvh",
            backgroundColor:"rgba(184, 236, 242,0.2)",
            
        }}
        >
        <div style={{marginTop:"0vh"}}>
          <TextField id="outlined-basic" label="Job Title"
           variant="outlined" 
           sx={{width:"90%"}}
           onChange={(e)=>{
               setTitle(e.target.value);
            }
        }
        required/>
          
        </div>
        <div style={{marginTop:"2vh"}}>
          <TextField id="outlined-basic" label="Company Name"
           variant="outlined" 
           sx={{width:"90%"}}
           onChange={(e)=>{
               setCompanyname(e.target.value);
            }
        }
        required/>
          
        </div>
        <div style={{marginTop:"2dvh"}}>
          <TextField
            id="outlined-multiline-static"
            label="Job Description"
            multiline
            rows={4}
            sx={{width:"90%"}}
            required
            onChange={(e)=>{
                setJobDecription(e.target.value);
            }}
            />
        </div>
        <div style={{marginTop:"2dvh"}}>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            type="date"
            sx={{width:"90%"}}
            required
            onChange={(e)=>{
                setPostedOn(new Date(e.target.value));
                
            }}
            />
        </div>

        <div style={{marginTop:"2dvh"}}>
          <TextField
            type="number"
            id="outlined-basic"
            label="Required Years of Experience"
            variant="outlined"
            sx={{width:"90%"}}
            required
            onChange={(e)=>{
                setExperience(e.target.value);
            }}
            />
        </div>
        <div style={{marginTop:"3dvh"}}>
        <Button variant="contained" type="submit">Post Job</Button>
        </div>
      </Paper>
    </div>
            </form>
  );
};

export default PostJobs;
