import './App.css';
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage';
import AboutPage from './Components/AboutPage/AboutPage';
import ProfilePage from './Components/ProfilePage/ProfilePage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route  path="/" element={<Homepage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/profile" element={<ProfilePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
