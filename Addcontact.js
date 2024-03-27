import React,{useState} from "react";
import {Link, useNavigate} from "react-router-dom";
 const Addcontact=(props)=>{

 const {propofcontact}=props;
    //as it is functional component state cant be used so state can be used as object here

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate=useNavigate();
    
    const add=(e)=>{
        e.preventDefault();
        if(name===""  || email===""){
            alert('please fill all the inputs');
            return;
         }
    
props.adddata({name:name, email:email});
setName('');
setEmail('');
// navigate('/list')
}

return(
<div>
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
        Submit
    </button>
<div>

    <Link to='/list'>
    <button >
        Showlists
    </button>
    </Link>

</div>
</div>
</form>
</div>

);
}

export default Addcontact;