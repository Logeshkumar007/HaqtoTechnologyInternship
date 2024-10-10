import axios from 'axios';
import React, { useEffect } from 'react';
import {useState} from 'react';
function App() {
  const [msg,setMsg]=useState([{name:"k"}]);
  const [name,setName]=useState("");
  const [del,setDel]=useState("");
  const [age,setAge]=useState("");
 async function getUserData() {
    try {
      const response = await fetch("http://localhost:3000/app/getuser");
      
      const data = await response.json();
      setMsg(data);
      console.log("hello"); // Process your data here
      console.log(data[0].name); // Process your data here
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  
 
  
  useEffect( () => {
    console.log("hei")
    getUserData();
    console.log("h")
    
  }, []);
  async function handlesubmit(e)
  {
    e.preventDefault();
    try{
      const response = await fetch("http://localhost:3000/app/adduser",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
          },
          body:JSON.stringify({
            name:name,
            age:age
            })
            });
          }
          catch(err)
          {
            throw err;
            console.log(err);
          }
          getUserData();
        }
        return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>React connection with node js</h1>
      <hr></hr>
      <h3>Data from mysql db nodejs</h3>
      {/* <h2>{msg[0].name}</h2>
      <h2>{msg[0].age}</h2> */}
      <table style={{border: "1px solid black"}}>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </table>
      {
        msg.map((value)=>{
          return(
            
            
            <tr><td>{value.name} </td><td>{value.age}</td></tr>
          )
        })
      }
      <form onSubmit={handlesubmit}>
        <hr></hr>
      <h2>Enter data to save in db</h2>
      <div >
      <input className="name-input" placeholder='name'onChange={(e)=>{
        setName(e.target.value);
      }}></input>
    
      <br></br>
      <br></br>
      <input placeholder='age' onChange={(e)=>{
        setAge(e.target.value);
      }}></input>
      
      </div>
      <div style={{marginTop:"3vh"}}>
      <button type='submit' >submit</button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <h1>Delete user from database</h1>
      <input placeholder='name'onChange={(e)=>{
        setDel(e.target.value);
        
      }}></input>
        <button onClick={async()=>{
          try{
            console.log(del);
            await axios.delete(`http://localhost:3000/app/deleteuser/${del}`);
            getUserData();
          }
          catch(err)
          {

          }
        }}>delete user</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </form>
      
    </div>
  );
}

export default App;
