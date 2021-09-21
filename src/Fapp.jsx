import axios from 'axios';
import React , {useState} from 'react';
import  './Fapp.css';
import logo from './favicon.ico';

 const Fapp=()=>{
  
  const url="http://localhost:5000/addfacts"
  const [data,setData]=useState({
   fact_type:"",
   fact_body:""
  })

  function submit(e){
    e.preventDefault();
    axios.post(url,{
      fact_type:data.fact_type,
      fact_body:data.fact_body
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

  const sub=()=>{
    alert("Fact added...");
  }

  
  
  return (
    <>
     <form onSubmit={(e)=>submit(e)} id="form-fapp">
     <div className="m-div" >
     <h2 id="fh2"><img  src={logo} alt="logo" style={{width:'30px',height:'30px'}}/><br></br>Factsbook</h2>
     <h1 id="fh1" className="ffh1">Add Fact</h1>
     <div className="card" id="fcard">
     <p id="lone" className="llone">
       Fact type 
     <select name="fact_type" id="fact_type" className="ffact_type" onChange={(e)=>handle(e)} value={data.fact_type} style={{  width:'165px'}}>
     <option value="option 1" >Select Your Fact</option>
     <option value="space"  name="space">Space</option>
     <option value="ocean" name="ocean">Ocean</option>
     <option value="human" name="human">Humans</option>
     <option value="music" name="music">Music</option>
     <option value="cars" name="cars">Cars</option>
     </select>
     </p>
     <br></br>
     <br></br>
     <br></br>
     <p id="ltwo" className="lltwo">
       Fact body <input type="text" name="fact_body" className="ffact_body" onChange={(e)=>handle(e)} value={data.fact_body} placeholder="eg 'space is complete silent'" required id="fact_body" minLength="15" maxLength="150" />
     </p>
     </div>
     <div>
     <button type="submit"  id="fbtn1" className="ffbtn1" onClick={sub}>Add</button>
     </div>
     </div>
     </form>
    </>
  );
}

export default Fapp;