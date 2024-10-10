import { configureStore } from '@reduxjs/toolkit';
import { formreducer } from './HomePage';


const Store=configureStore({
    reducer:{
        formstate:formreducer
    }
})
export default Store;