import React, { useState , useEffect } from 'react';
import { FaItunesNote ,FaWalking ,FaWater ,FaCar } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import axios from 'axios';
import './Capp.css';



const Capp  = () => {

  const [getMessage, setGetMessage] = useState({})
  

  useEffect(()=>{
    axios.get('http://172.31.6.14:5000/hoo').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })
  }, [])




const cb1 = () => {
   
  document.getElementById("one").style.backgroundImage = 'url(https://images.unsplash.com/photo-1533800087956-0f251616e18e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHNwYWNlJTIwcm9ja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)';
  console.log('calling space function')
  getFacts('space');
} 

const cb2 = () => {
 
  document.getElementById("one").style.backgroundImage = 'url(https://images.unsplash.com/photo-1551244072-5d12893278ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fG9jZWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)';
  getFacts('ocean');
} 

const cb3 = () => {
  
  document.getElementById("one").style.backgroundImage = 'url(https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)';
  getFacts('human');
} 

const cb4 = () => {
   
  document.getElementById("one").style.backgroundImage = 'url(https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)';
  getFacts('music');
} 

const cb5 = () => {
  getFacts('cars'); 
  document.getElementById("one").style.backgroundImage = 'url(https://images.unsplash.com/photo-1517672651691-24622a91b550?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)';
} 



const getFacts=(fact_type)=>{
  console.log('inside getFacts',fact_type)
  axios.get('http://172.31.6.14:5000/'+fact_type+"").then(response => {
    console.log("SUCCESS", response)
    setGetMessage(response)
  }).catch(error => {
    console.log(error)
  })  
 }

return(
    <div>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <div className="navbar">
    <ul>
    <li><a href="/">Factsbook</a></li>
    </ul>
    </div>
    <div id="one" className="main_div" style={{marginLeft:'-15px',marginTop:'-0.00px',height: '100vh', width: '100vw',backgroundSize:'cover',backgroundPosition:'center', backgroundImage:'url(https://images.unsplash.com/photo-1533800087956-0f251616e18e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHNwYWNlJTIwcm9ja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)'}}>
    <div  className="center_div" >
    <div  className="top_div">
     
    
    <button onClick={cb1}  id="b1" autoFocus><IoRocketSharp/><br/><br/>Space</button> 
    
    
    <button  onClick={cb2} id="b2"> <FaWater/><br/><br/>Ocean</button>
    
 
    <button onClick={cb3} id="b3"> <FaWalking/><br/><br/>Humans</button>
    
 
    <button  onClick={cb4} id="b4" > <FaItunesNote/><br/><br/>Music</button>
    
  
    <button  onClick={cb5} id="b5"> <FaCar/><br/><br/>Cars</button>
    
    </div>
    <br/>
    <br/>
    <h2>
    { 
      getMessage.status === 200 ? 
          <h4>{getMessage.data.fact_body}</h4>
          :
          <h4 style={{marginLeft:'58px'}}>{getFacts('space')}</h4>    
    }
    </h2> 
    <br/>
    </div> 
    </div>
    </div>
   ) 
}



export default Capp;




