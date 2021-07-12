/* import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;

*/


import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HashLoader from "react-spinners/HashLoader";



function App() {
  const [getMessage, setGetMessage] = useState({})

  const [loading,setLoading]=useState(false);

  useEffect(()=>{
   setLoading(true)
   setTimeout(()=>{
     setLoading(false);
   },8000);
  },[])

  useEffect(()=>{
    axios.get('http://localhost:5000/ocean').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">
    {
      loading ?

      <HashLoader
       color={'#F37A24'}
       loading={loading}  
       size={120} 
       />
      :
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React + Flask Tutorial
        </p>
        <div>
       
        {getMessage.status === 200 ? 
          
          <h3>{getMessage.data.fact_body}</h3>
          :
          <h3>LOADING...</h3>
        }
          </div>
      </header>

    }
    </div>
  );
}

export default App;