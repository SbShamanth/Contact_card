import React from "react";
import Contactcard from './Contactcard'
import {Link} from 'react-router-dom'
const Contactlist=(props)=>{

const {propofcontact,handleDelete, updatedata}=props;

const printcontactlist=()=>{
      return propofcontact.map((contact) => {
        if(contact.name) {
        return (
        <Contactcard propofcontact={contact}  updatedata={updatedata} handleDelete={handleDelete} key={contact.id}/>
      )}})
}

return(
    <div>
      
      {console.log(propofcontact, "<=====propofcontact")}
      {printcontactlist()}

    <Link to='/add'> 
    <button >Home</button>
    </Link>
    </div>
  );
}

export default Contactlist;