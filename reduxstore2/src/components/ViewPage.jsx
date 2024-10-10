import React from 'react';
import { useSelector } from 'react-redux';
import { json } from 'react-router-dom';
const logesh={
    color:'red',k:"jd"
}
const ViewPage = () => {
    const data=useSelector(state=>state.formstate)
    console.log(data);
    return (
        <div>
            <h1>View Page</h1>
            <h3>{JSON.stringify(data)}</h3>
            <h1>{data.stat.name}</h1>
        </div>
    );
}

export default ViewPage;
