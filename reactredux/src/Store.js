import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
const initialstate={
    count:0
}
const reducer=(state=initialstate,action)=>{
    if(action.type==='INC')
        return {...state,count:state.count+1}
    else
    return {...state,count:state.count}
    
}
const reduxstore=configureStore({
    reducer:{
        counte:reducer
    }
});
export default reduxstore;
