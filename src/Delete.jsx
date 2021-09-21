import axios from 'axios';
import React , {useState} from 'react';
import  './Delete.css';
import logo from './favicon.ico';

 const Delete=()=>{
  
  const url="http://172.31.6.14:5000/deletefacts"
  const [data,setData]=useState({
   id:"", 
  })

  function submit(e){
    e.preventDefault();
    axios.post(url,{
        id:data.id,
     
    })
    .then(res=>{
      console.log(res.data)
    })
  }
  
  function handle(e){
      const newdata={...data}
      newdata[e.target.id]=e.target.value
      setData(newdata)
      console.log(newdata)
  }

  
  const del=()=>{
    alert("Fact deleted...");
  }
  
  
  
  return (
    <>
     <form onSubmit={(e)=>submit(e)}>
     <div className="m-div">
     <h2 className="ddh2"><img  src={logo} alt="logo" style={{width:'30px',height:'30px'}}/><br></br>Factsbook</h2>
     <h1 id="dh1" className="ddh1">Delete Fact</h1>
     <div className="ddcard">
     <p id="one" className="ddone">
         id <input type="number" id="id" className="ddid" name="id" onChange={(e)=>handle(e)} value={data.id} style={{width:'155px'}}  maxLength="4"/>
     </p>
     <br></br>
     </div>
     <div className="ddbtndiv">
     <br></br>
     <button type="submit"  id="dbtn1" className="dddbtn1" onClick={del}>Delete</button>
     </div>
     </div>
     </form>
    </>
  );
}

export default Delete;