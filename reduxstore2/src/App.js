import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewPage from './components/ViewPage';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/view' element={<ViewPage/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
