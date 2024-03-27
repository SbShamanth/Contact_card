import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contactcard = (props) => {
  const { propofcontact, handleDelete,updatedata } = props;

  const onDeleteClick = () => {
    // Call the handleDelete function with the name and email of the contact
    handleDelete(propofcontact.name, propofcontact.email);
  };

  const onUpdateClick=()=>{
    updatedata();
  };

  return (
    <div>
      <div>
        {propofcontact.name}
      </div>
      <div>
        {propofcontact.email}
      </div>

      <div>
        <button onClick={onDeleteClick}>Delete</button>
      </div>
      <div>
        <Link to='/edit'
state = {{propofcontact }}
        >
        <button>Edit</button>
        </Link>
        
      </div>
    </div>
  );
};

export default Contactcard;

