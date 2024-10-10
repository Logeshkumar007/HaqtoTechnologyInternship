import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import {AppBar,Toolbar} from '@mui/material'
const Homepage = () => {
    return (
        <div>
            <AppBar sx={{height:"45px",position:"relative",textAlign:"center"}}>

            <div className='navigations'>  
                <Link className="aboutlink"to="/about">About </Link>
                <Link to="/profile">profile</Link>
            </div>
            </AppBar>
            <h1>Homepage</h1>
        </div>
    );
}

export default Homepage;
