import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.js';
//import Capp from './Capp.jsx';
import reportWebVitals from './reportWebVitals';
//import Fapp from './Fapp';
//import Wapp from './Wapp';
//import './index.css';
import {BrowserRouter} from 'react-router-dom';
import Zapp from './Zapp';
//import Delete from './Dalete'
//import Lpage from './Componets/Lpage'
//import Admin from './Admin'

ReactDOM.render(
  <BrowserRouter>
   <Zapp/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
