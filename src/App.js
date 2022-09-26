import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        setCounter(25);
    },[]);

    return(
        <div className='App'>
            <button className='button' onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>
            <h1>{counter}</h1>
            <button className='button' onClick={()=>setCounter((prevCount)=>prevCount-1)}>-</button>        
        </div>
    )
}
export default App;