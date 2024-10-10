import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Signup = () => {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupFirstname, setSignupFirstname] = useState("");
  const [signupLastname, setSignupLastname] = useState("");
  const [signupPhn, setSignupPhn] = useState("");
  const [signupCountry, setSignupCountry] = useState("");
  const [signupDistrict, setSignupDistrict] = useState("");
  const [signupState, setSignupState] = useState("");
  const nav=useNavigate();
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("post triggered");
      const userdata = await axios.post("http://localhost:3005/app/post/credentials", {
        firstname: signupFirstname,
        lastname: signupLastname,
        email: signupEmail,
        password: signupPassword,
        district: signupDistrict,
        state: signupState,
        country: signupCountry,
        phn: signupPhn
      });
      console.log("vhgyj");
      if (userdata.data.statusCode === 200) {
        alert(userdata.data.message);
        nav("/");
      } else if (userdata.data.statusCode === 404) {
        alert(userdata.data.message);
      }
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUpSubmit}>
        <h1>Sign Up</h1>
        <div style={{ display: "flex", height: "4vh" }}>
          <label>First Name :</label>
          <input type="text" style={{ marginLeft: "3vh" }}
           required onChange={(e) => setSignupFirstname(e.target.value)} />
        </div>
        <div style={{ display: "flex", height: "4vh", marginTop: "1vh" }}>
          <label>Last Name :</label>
          <input type="text" style={{ marginLeft: "1vh" }}
           required onChange={(e) => setSignupLastname(e.target.value)} />
        </div>
        <div style={{ display: "flex", height: "4vh", marginTop: "1vh" }}>
          <label>Email :</label>
          <input type="text" style={{ marginLeft: "3vh" }}
           required onChange={(e) => setSignupEmail(e.target.value)} />
        </div>
        <div style={{ display: "flex", height: "4vh", marginTop: "1vh" }}>
          <label>Password :</label>
          <input type="text" style={{ marginLeft: "1vh" }}
           required onChange={(e) => setSignupPassword(e.target.value)} />
        </div>
        <div style={{ display: "flex", height: "4vh", marginTop: "1vh" }}>
          <label>Phone :</label>
          <input type="text" style={{ marginLeft: "3vh" }}
           required onChange={(e) => setSignupPhn(e.target.value)} />
        </div>
        <div style={{ display: "flex", height: "4vh", marginTop: "1vh" }}>
          <label>Country :</label>
          <input type="text" style={{ marginLeft: "1vh" }}
           required onChange={(e) => setSignupCountry(e.target.value)} />
        </div>
        <div style={{ display: "flex", height: "4vh", marginTop: "1vh" }}>
          <label>District :</label>
          <input type="text" style={{ marginLeft: "3vh" }}
          required  onChange={(e) => setSignupDistrict(e.target.value)} />
        </div>
        <div style={{ display: "flex", height: "4vh", marginTop: "1vh" }}>
          <label>State :</label>
          <input type="text" style={{ marginLeft: "1vh" }}
          required  onChange={(e) => setSignupState(e.target.value)} />
        </div>
        <button type="submit" style={{marginTop:"4vh"}}>Submit</button>
        <div>

        <button  style={{marginTop:"2vh",marginLeft:"0.5vh"}} onClick={()=>{
          nav("/");
        }}>signin</button>
        </div>



      </form>
    </div>
  );
}

export default Signup;
