import React,{useState,useEffect} from 'react';
import Contactlist from './Contactlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Axioscontact from './Api/Axioscontact';
import Addcontact  from './Addcontact';
// import Contactcard from './Contactcard';
import Editcontact from './Editcontact'

const Function = () => {

const [contact,setcontact]=useState([]);

const LOCAL_STORAGE_KEY = 'contact';

//code to ftehc all contacts
const fetchallcontacts=async ()=>{
const response=await Axioscontact.get("/contact");
return response.data;
};

//before the below function wa sfetching from the storge now its fetching from json server db

// const storedContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
// if (storedContact) {
//   setcontact(storedContact);
const getallcontacts=async()=>{
  const allcontacts=await fetchallcontacts();
  if(allcontacts) 
      {
  setcontact(allcontacts)
      }
    }
useEffect(() => {
  getallcontacts();
},[]);

const adddata = async (contact1) => {
  const response = await Axioscontact.post('http://localhost:3000/contact',contact1);
  setcontact([...contact, response.data]);
  };

// useEffect(()=>{
//   contact.length > 0 && localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact)); 
// },[contact]);

// const adddata=(contact1)=>{
//   setcontact([...contact,contact1]);
// }

//the below code to delete the data in not json
// const handleDelete = async(name, email) => {
//   // Filter out the contact with the provided name and email
//   const updatedContacts = contact.filter(contact => contact.name !== name || contact.email !== email);
//   setcontact(updatedContacts);
// };

const handleDelete = async (name, email) => {
  try {
    // Find the contact ID by name and email
    const contactToDelete = contact.find(contact => contact.name === name && contact.email === email);
    if (!contactToDelete) {
      // Handle case where contact is not found
      console.error('Contact not found');
      return;
    }
    // Send DELETE request to the JSON server
    await Axioscontact.delete(`/contact/${contactToDelete.id}`);
    // Filter out the deleted contact from the state
    const updatedContacts = contact.filter(contact => contact.id !== contactToDelete.id);
    setcontact(updatedContacts);
  } catch (error) {
    // Handle any errors
    console.error('Error deleting contact:', error);
  }
};

const updatedata = async (contact2) => {
  const response = await Axioscontact.put(`http://localhost:3000/contact/${contact2.id}`,contact2);
  getallcontacts();
  // setcontact([...contact, response.data]);
};

return(
<div>
  <Router>
  <Header/>

  <Routes>
  <Route path='/add' exact  element={<Addcontact adddata={adddata} propofcontact={contact}/>}/>
  <Route path='/list'  exact element={<Contactlist updatedata={updatedata} propofcontact={contact} handleDelete={handleDelete} key={contact.id} /> }/>
  <Route path='/edit' exact element={<Editcontact updatedata={updatedata} />}/>
  {/* <Route path='/list' exact element={Contactcard}/> */}
   
 </Routes>
{/* 
  <Addcontact adddata={adddata} propofcontact={contact}/>
  <Contactlist propofcontact={contact} handleDelete={handleDelete} key={contact.id} /> */}
  </Router>

</div>
);
}
  
export default Function;
