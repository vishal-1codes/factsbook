import axios from 'axios';
import React , {useState} from 'react';
import  './Update.css';
import logo from './favicon.ico';

 const Update=()=>{
  
  const url="http://localhost:5000/updatefacts"
  const [data,setData]=useState({
   id:"", 
   fact_body:""
  })

  function submit(e){
    e.preventDefault();
    axios.post(url,{
        id:data.id,
      fact_body:data.fact_body,
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

  
  const upd=()=>{
    alert("Fact updated...");
  }
  
  
  
  return (
    <>
     <form onSubmit={(e)=>submit(e)}>
     <div className="m-div">
     <h2 className="uuh2"><img  src={logo} alt="logo" style={{width:'30px',height:'30px'}}/><br></br>Factsbook</h2>
     <h1 id="uh1" className="uuh1">Update Fact</h1>
     <div className="uucard" >
     <p id="one" className="uuone">
         id <input type="number" id="id" className="uuid" name="id" onChange={(e)=>handle(e)} value={data.id} style={{width:'155px'}}  maxLength="4"/>
     </p>
     <br></br>
     <p id="ltwo" className="uutwo">
       Fact body <input type="text" name="fact_body" className="uufact_body" onChange={(e)=>handle(e)} value={data.fact_body} placeholder="eg 'space is complete silent'" required id="fact_body"  minLength="15" maxLength="150"/>
     </p>
     </div>
     <div className="uubtndiv">
     <br></br>
     <br></br>
     <br/>
     <button type="submit"  id="ubtn1" className="uubtn1" onClick={upd}>Update</button>
     </div>
     </div>
     </form>
    </>
  );
}

export default Update;