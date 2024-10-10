import React from 'react';
import './Signup.css';
import {Box, Button, TextField, Typography} from '@mui/material'
const Signup = () => {
    return (
        
            <div className='wrapper-container'>
                <div className='wrapper-container-2'>

                <div className='container'>
                    <Typography sx={{fontSize:"5vh"}}>Sign Up</Typography>
                    <div className='container-name'>
                    
                    <TextField id="outlined-basic" className="container-name-firstname" label="FirstName" sx={{mr:"2vh"}} variant="outlined" />
                    <TextField id="outlined-basic" className="container-name-lastname" label="LastName" variant="outlined" />
                    </div>
                    <TextField id="outlined-basic" sx={{mt:"1.5vh"}} className='container-newpassword' label="New Password" variant="outlined" />
                    <TextField id="outlined-basic"  sx={{mt:"1.5vh"}}className='container-phn' label="phone" variant="outlined" />
                    <Button variant="contained" onClick={()=>{
                        ;
                    }}sx={{mt:"5vh"}}>Sign Up</Button>
                </div>
                </div>
            </div>
        
    );
}

export default Signup;
