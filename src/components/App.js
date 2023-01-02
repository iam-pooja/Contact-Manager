import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';
import './App.css';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';


function App() {
const LOCAL_STORAGE_KEY = 'contacts';
const [contacts, setContacts] = useState([]);


const addContactHere = (contact) => {
   setContacts([...contacts, {id : uniqid(), ...contact}]);

}


const removeContactHandler = (id) => {
  const newContactList = contacts.filter((contact) => {
    return contact.id !== id;
  });
  setContacts(newContactList);
}


useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {
        setContacts(retrieveContacts);
    } 
 }, []);


useEffect(() => {
    if(!contacts.length === 0) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    console.log(uniqid());
   }
}, [contacts]);


const navigation = useNavigate(); 
return(
  <div className = "ui container">
    <Routes>
    
    <Route path = "/" 
        element = {<ContactList 
        contactList = {contacts} getContactId = {removeContactHandler} />} />

    <Route path = "/add" element = { <AddContact 
        addContactHandler = {addContactHere} navigation = {navigation}/>} />

    <Route path = "/contactList/:id" element = {<ContactDetails/>} />   
     

  
   
        {/* <AddContact addContactHandler = {addContactHere} /> */}
        {/* <ContactList contactList = {contacts} getContactId = {removeContactHandler} /> */}
    </Routes>
  </div>
 );

}


export default App;
