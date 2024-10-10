import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";
const store=configureStore(
    {

        reducer:{
            storeReducer:Reducer.dataslice,
            jobReducer:Reducer.jobslice
        }
    }
);
export default store;