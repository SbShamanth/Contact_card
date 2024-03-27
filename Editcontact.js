import React,{useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";

 const Editcontact=(props)=>{
  const location=useLocation();
  const propofcontact=location.state.propofcontact;

//  const {propofcontact}=props;
    //as it is functional component state cant be used so state can be used as object here

    const [name, setName] = useState(propofcontact.name);
    const [email, setEmail] = useState(propofcontact.email);


    const navigate=useNavigate();
    const add=(e)=>{
        e.preventDefault();
        if(name===""  || email===""){
            alert('please fill all the inputs');
            return;
         }
    
props.updatedata({id : propofcontact.id,name:name, email:email});
setName('');
setEmail('');
navigate('/list')
}

return(
<div>
    <h>
        Update data page
    </h>
<form onSubmit={add}>

    <div>
        <div>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/> 
        </div>
        
        <div>
        <label>Email</label>
        <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
        </div>
    </div>

<div>
    <button type="submit">
        Update
    </button>
</div>
</form>
</div>

);
}

export default Editcontact;