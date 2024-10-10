import axios from 'axios';
import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from "../store/Reducer";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useNavigate } from "react-router";

function Signin() {
  const [navprofile,setNavprofile]=useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phn: "",
    country: "",
    district: "",
    state: ""
  });
  
  const dispatch=useDispatch();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  
  useEffect(() => {
    console.log("Updated data state:", data);
    
    dispatch(setUser(data));
    console.log("dkdkdkd");
    if(navprofile)
    {
      navigate("/profile");
    }
  }, [data]);
  
  
    function validate(userdata){
      
      if(userdata.data.statusCode===200)
      {
        alert(userdata.data.message);
        setData(userdata.data.data);
        setNavprofile(true);
      }
      if(userdata.data.statusCode===404)
      {
        alert(userdata.data.message);
      }
      

    }
    
    
    
    const handleSigninsubmit=async(e)=>{
      try{
        
        console.log("get triggerd");
        e.preventDefault();
        const userdata=await axios.get(`http://localhost:3005/app/get/credentials/${email}/${password}`);
        validate(userdata);
        console.log(userdata);
        // navigate("/profile");
      }
      catch(err)
      {
        console.log(err);
      }
    }
    
  return (
    <div className="App" style={{position:"relative"}}>
      <div style={{display:'flex',justifyContent:"space-between"}}>
      <h1>Sign in</h1>
      <AccountCircleRoundedIcon onClick={()=>{
        // alert("adsj");
        navigate("/profile");
      }} sx={{mr:"2vh",mt:"2vh",height:"5vh",width:"5vh"}}/>
      </div>

      <div>
        <form onSubmit={handleSigninsubmit}>
          <div style={{ display: "flex", height: "4vh" }}>
           
                <label>Email :</label>
              
                <input type="text" style={{ marginLeft: "3vh" }}
                onChange={(e)=>{
                  setEmail(e.target.value);
                  // console.log(email);
                }} required />
            
           
          </div>
          <div style={{ display: "flex", height: "4vh",marginTop:"1vh" }}>
          
                <label>Password :</label>
             
                <input type="text" style={{ marginLeft: "1vh" }}
                 onChange={(e)=>{
                  setPassword(e.target.value);
                  // console.log(password);
                }} required/>
             
          </div>

        <div style={{display:'flex',marginTop:"0vh"}} > 
        <button  style={{marginTop:"5vh",marginRight:"15vh",marginBottom:"7vh"}}type='submit'>Log in</button>
        <br></br>
        <br></br>
        <br></br>
        <div style={{marginTop:"3vh",display:"flex",flexDirection:"row"}}>

        <h4>new user?</h4>
        <button  style={{marginTop:"3vh",marginBottom:"7vh",marginLeft:"3vh"}} onClick={()=>{
          navigate("/signup");
        }}>signup</button>
        </div>
        </div>
        
        <br></br>
        {/* <img src={img} style={{width:"35vh",position:"absolute",right:"12vh",top:"2vh"}}></img> */}
        <hr></hr>
                </form>
      </div>
      
      
    </div>
  );
}

export default Signin;
