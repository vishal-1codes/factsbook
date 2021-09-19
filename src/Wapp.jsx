import React from 'react';
import './Wapp.css';
import logo from './favicon.ico';
import { FaItunesNote ,FaWalking ,FaWater ,FaCar } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
//import Capp from './Capp';

 const Wapp=()=>{
  return (
    <>
     <div>
         <div className="first" >
         <h2 className="wwh2"><img src={logo} alt="logo" style={{width:'30px',height:'30px'}} /> <br/>Factsbook</h2>
         <h1>Explore thousands of facts and funfacts about</h1>
         <p id="p1"><br/><IoRocketSharp/> Space</p>
         <p id="p2"><br/><FaWater/> Ocean</p>
         <p id="p3"><br/><FaWalking/> Humans</p>
         <p id="p4"><br/><FaItunesNote/> Music</p>
         <p id="p5"><br/><FaCar/> Cars</p>
         <Link to="/factsbook"><p id="p6" className="wwbtn">EXPLORE</p></Link>
         </div>
     </div>
    </>
  );
}

export default Wapp;