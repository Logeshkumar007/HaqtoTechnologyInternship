import { Divider, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJobSelected } from '../../store/Reducer';

const JobPaper = (props) => {
    const {data}=props;
    
    const dispatch=useDispatch();
    const jobSelectedidfromstore=useSelector(state=>state.jobReducer.jobSelected);
    const [style, setStyle] = useState({
        paddingBottom: "2dvh",
        paddingLeft: "1.5dvh",
        paddingRight: "1.5vh",
        backgroundColor: "rgba(255,255,255,0.5)"
    });

    return (
        <div style={{width:"100%"}}>
            <Paper elevation={3} sx={style
            } onClick={()=>{
                dispatch(setJobSelected(data.jobid));
                
                
                
            }} onMouseEnter={()=>{
                setStyle(
                    {

                        paddingBottom: "2dvh",
                        paddingLeft: "1.5dvh",
                        paddingRight: "1.5vh",
                        backgroundColor: "rgba(255,255,255,0.8)",
                        width:"95%",
                        
                        
                    }
                );
                
            }}
             onMouseLeave={()=>{
                setStyle(
                    {

                        paddingBottom: "2dvh",
        paddingLeft: "1.5dvh",
        paddingRight: "1.5vh",
        backgroundColor: "rgba(255,255,255,0.5)"
                    }
                    );
            }}>
                <Typography sx={{fontSize:"4dvh",fontWeight:"500",paddingTop:"1dvh",paddingBottom:"0.5vh"}}>{data.jobtitle}</Typography>
                <Typography sx={{fontSize:"2.5dvh",fontWeight:"500",paddingTop:"0.2dvh",paddingBottom:"0.5vh"}}>{data.companyname}</Typography>
                
                <Divider  />
                <Typography sx={{fontSize:"1.75vh",marginTop:"0.5vh"}}>{data.jobdescription}</Typography>
                <div style={{display:"flex",justifyContent:"space-between"}}>

                <Typography sx={{fontSize:"1.75vh",fontWeight:"600",mt:"1.5vh"}}>Posted on: {data.postedon.substring(0, 10)}</Typography>
                <Typography sx={{fontSize:"1.75vh",fontWeight:"600",mt:"1.5vh",mr:"2vh"}}>Experience: {data.experience} years</Typography>
                </div>
            </Paper>
        </div>
    );
}

export default JobPaper;
