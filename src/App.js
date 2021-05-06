import React from 'react'
import './App.css';
import Apple from './Apple';

import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions/index'



function App() {
  const myState = useSelector((state) => state.numberReducer);
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1> Hello Redux </h1>
      <div>
        <button onClick={() => dispatch(decNumber())} > - </button>
        <input style={{ textalign: "center" }} type="text" className="icreement__input" value={myState} />
        <button onClick={() => dispatch(incNumber())} > + </button>
      </div>
      <Apple />

    </div>
  );
}

export default App;
