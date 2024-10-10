import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile from './components/profile';
import { Provider } from 'react-redux';
import store from './store/store';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Signup from './components/signup';
import Signup from './components/signup';
import Signin from './components/signin';
import JobsHomepage from './components/jobs/jobsHomepage';
import PostJobs from './components/jobs/postJobs';
import Contact from './components/contact/contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>


    <Routes>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/jobs" element={<JobsHomepage/>}></Route>
      <Route path="/" element={<Signin/>}></Route>
      <Route path="/postjobsHome" element={<PostJobs/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
