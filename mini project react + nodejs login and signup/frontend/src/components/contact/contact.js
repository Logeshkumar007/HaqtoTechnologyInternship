import { AppBar, Button, Card, TextField, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Contact = () => {
    const nav=useNavigate();
    const [email,setEmail]=useState("");
    const [msg,setMsg]=useState("");
    return (
        <div >
            <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: "black" }}>
          <Typography>Job o Mania</Typography>
          <div
            style={{
              marginLeft: "35dvw",
              marginRight: "35dvw",
              width: "100dvw",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>JOBS</Typography>

            <Typography
              onClick={() => {
                nav("/postjobsHome");
              }}
            >
              POST JOB
            </Typography>
            <Typography onClick={()=>{
              nav("/contact")
            }}>Contact</Typography>
          </div>
        </Toolbar>
      </AppBar>

            <div style={{backgroundColor:"rgba(184, 236, 242,0.8)",height:"100dvh",paddingTop:"0vh",alignItems:"center",alignContent:"center",display:"flex",justifyContent:"space-around"}}>
                    
                      <Card sx={{borderRadius:"4vh",background:"transperent",
                        backgroundColor:"rgba(256, 256, 256,0.7)",width:"35%",height:"60%"
                      }}>
                        <div style={{paddingLeft:"15%",paddingRight:"10%",display:"flex",flexDirection:"column"}}>
                        <Typography sx={{marginTop:"5vh",textAlign:"center",paddingRight:"15%",color:"rgba(0, 0, 0,1)"}} variant="h4" >CONTACT</Typography>
                        <Typography ></Typography>
                        <Typography variant="h5" sx={{color:"black",paddingTop:"5vh"}}
                        >Email </Typography>
                        <TextField multiline id="outlined-basic" label="enter email id" variant="standard"
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }} />
                        <Typography variant="h5" sx={{color:"black",paddingTop:"5vh"}}
                        >Message </Typography>
                        <TextField id="outlined-basic" label="enter your requirement" variant="standard"
                        onChange={(e)=>{
                            setMsg(e.target.value);
                        }} />
                        <Button sx={{marginTop:"12%"}}
                        onClick={()=>{
                            if(email=="" || msg=="")
                            {
                                alert("Please fill all the fields");
                            }
                            else
                            {

                            }

                        }}
                        >contact us</Button>
                        </div>
                        </Card>  
                    
            </div>
        </div>
    );
}

export default Contact;
