import React from 'react';
//import axios from 'axios';
import './Admin.css'
const Admin=()=>{
    return(
        <>
        <div className="a_main">
        <div className="a_nav">
        <a href="/factsbook" id="nav_one"><hr/>Factsbook-Admin</a>
        </div>
        <div className="a_body" style={{height: '100vh', width: '100vw',backgroundSize:'cover',backgroundPosition:'center', backgroundImage:'url(https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)'}}>
        <div className="a_2body">
        EDIT FACTSBOOK
        <hr/>
        <a href="/addfacts" id="nav_two">Add Fact</a>
        <br/>
        <a href="/deletefacts" id="nav_three">Delete Fact</a>
        <br/>
        <a href="/updatefacts" id="nav_four">Update Fact</a>
        <br/>
        <a href="/factsbook" id="nav_btn">BACK</a>
        </div>
        </div>
        </div>
        </>
    );
}

export default Admin;