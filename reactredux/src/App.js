import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const countstate=useSelector(state=> state.counte);
const dispatch=useDispatch();
  const increment=()=>{
    console.log("dispatched");
    dispatch({type:'INC'});
  }


  // console.log(countstate);
  return (
    <div className="App">
      <h6>Counter</h6>
      <h5>{countstate.count}</h5>
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default App;
