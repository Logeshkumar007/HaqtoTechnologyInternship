import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './pofile.css';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/Reducer';
import axios from 'axios';
import 'boxicons'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
const Profile = () => {
  const selector = useSelector((state) => state.storeReducer);
  const [editopen, setEditopen] = useState(false);
  const [email, setEmail] = useState(selector.email);
  const [firstname, setFirstname] = useState(selector.firstname);
  const [lastname, setLastname] = useState(selector.lastname);
  const [phn, setPhn] = useState(selector.phn);
  const [country, setCountry] = useState(selector.country);
  const [district, setDistrict] = useState(selector.district);
  const [state, setState] = useState(selector.state);
  const dispatch=useDispatch();
  const nav=useNavigate();
  useEffect(()=>{
    setEmail(selector.email);
    setFirstname(selector.firstname);
    setLastname(selector.lastname);
    setPhn(selector.phn);
    setCountry(selector.country);
    setDistrict(selector.district);
    setState(selector.state);
    console.log(selector.email);
  },[selector.email])
      const handleupdate=async(e)=>{
           try{

             const data = {email, firstname, lastname, phn, country, district,
              state};
              console.log(data);
              const updated=await axios.put(`http://localhost:3005/app/update/userDetails`,data);
              // console.log(updated.data.message);
              dispatch(setUser(data));
              alert(updated.data.message);
              setEditopen(false);
            }
            catch(err)
            {
              console.log(err);
            }
      }
  return (
    <div>
      <div className="profile-container" style={{ display: "flex" }}>
        <h1>Profile</h1>
        <div className="profile-icon">
          <box-icon
            onClick={() => {
              setEditopen(!editopen);
              console.log(editopen);
            }}
            name="edit-alt"
          ></box-icon>
        </div>
      </div>
      <div style={{ display: "flex", height: "4vh" }}>
        <label>First Name :</label>
        {editopen ? (
          <input
            type="text"
            defaultValue={selector.firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="Enter First Name"
            style={{ marginLeft: "2vh" }}
          />
        ) : (
          <label>{selector.firstname}</label>
        )}
      </div>
      <div style={{ display: "flex", height: "4vh", marginTop: "1vh" }}>
        <label>Last Name : </label>
        {editopen ? (
          <input
      //     value="dhbjshd"
            defaultValue={selector.lastname}
            onChange={(e) =>{
                  setLastname(e.target.value)
                  console.log(lastname);
            }}
            type="text"
            placeholder="Enter Last Name"
            style={{ marginLeft: "2vh" }}
          />
        ) : (
          <label>{selector.lastname}</label>
        )}
      </div>
      <div style={{ display: "flex", height: "4vh", marginTop: "1vh" }}>
        <label>Email : </label>
        {editopen ? (
          <input
            value={selector.email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter Email"
            style={{ marginLeft: "2vh" }}
          />
        ) : (
          <label>{selector.email}</label>
        )}
      </div>
      <div style={{ display: "flex", height: "4vh", marginTop: "1vh" }}>
        <label>Phone : </label>
        {editopen ? (
          <input
            defaultValue={selector.phn}
            onChange={(e) => setPhn(e.target.value)}
            type="text"
            placeholder="Enter Phone"
            style={{ marginLeft: "2vh" }}
          />
        ) : (
          <label>{selector.phn}</label>
        )}
      </div>
      <div style={{ display: "flex", height: "4vh", marginTop: "1vh" }}>
        <label>District : </label>
        {editopen ? (
          <input
            defaultValue={selector.district}
            onChange={(e) => setDistrict(e.target.value)}
            type="text"
            placeholder="Enter District"
            style={{ marginLeft: "2vh" }}
          />
        ) : (
          <label>{selector.district}</label>
        )}
      </div>
      <div style={{ display: "flex", height: "4vh", marginTop: "1vh" }}>
        <label>State : </label>
        {editopen ? (
          <input
            defaultValue={selector.state}
            onChange={(e) => setState(e.target.value)}
            type="text"
            placeholder="Enter State"
            style={{ marginLeft: "2vh" }}
          />
        ) : (
          <label>{selector.state}</label>
        )}
      </div>
      <div style={{ display: "flex", height: "4vh", marginTop: "1vh" }}>
        <label>Country : </label>
        {editopen ? (
          <input
            defaultValue={selector.country}
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            placeholder="Enter Country"
            style={{ marginLeft: "2vh" }}
          />
        ) : (
          <label>{selector.country}</label>
        )}
      </div>
      
      
      {
            editopen?(<button onClick={handleupdate}>update</button>):(<></>)
      }
      <Button onClick={()=>{
        nav("/jobs")
      }}>Jobs</Button>
     
    </div>
  );
};

export default Profile;
