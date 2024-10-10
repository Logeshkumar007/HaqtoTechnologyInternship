import React from 'react';
import './HomePage.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



// reducer function for saving data into forms
const initialstate={
    name:'',age:'',email:'',password:''
}
export const formreducer=(stat=initialstate,action)=>{
    if(action.type==='submit')
        {
            return { ...stat, stat:action.payload};
        }
        else
        {
            return {stat};
        }
    }
    
    // content of home page
    const HomePage = () => {
    const nav=useNavigate();
    const formValues={
        name:'',age:'',email:'',password:''
    };
    const dispatch=useDispatch();
    function handlesubmit(e)
    {
        dispatch({type:"submit",payload:{...formValues}});
        e.preventDefault();
        console.log(formValues);
        nav('/view');
    }
    return (
        
        <div>
            <form onSubmit={handlesubmit}>
                <ul style={{listStyleType:"none"}}>
                <li>

                <label>Name : </label>
                <input type='text' onChange={(e)=>{
                    formValues.name=e.target.value;
                }}></input>
                </li>
                <li>

                <label>Age : </label>
                <input type='text' onChange={(e)=>{
                    formValues.age=e.target.value;
                }}></input>
                </li>
                <li>

                <label>email : </label>
                <input type='email' onChange={(e)=>{
                    formValues.email=e.target.value;
                }}></input>
                </li>
                <li>

                <label onChange={(e)=>{
                    formValues.password=e.target.value;
                }}>password : </label>
                <input type='password'></input>
                </li>
                
                
                </ul>
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    );
}

export default HomePage;
