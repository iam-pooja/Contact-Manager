import React from 'react';
import ContactCard from './ContactCard';
import Header from './Header';
import {Link} from 'react-router-dom';

const ContactList = (props) => {
    
    const deleteContactHandler = (id) => {
        props.getContactId(id)
    }


    const renderContactList = props.contactList.map((contact) => {
        return (
         <ContactCard contactList = {contact} clickHandler = {deleteContactHandler}/>
        );
    });
    
    return (
        <>
        <Header/>
        <div className = 'main'>
        <h1>nothingg</h1>
        <h2> Contact List</h2>
        <Link to= "/add">
        <button className='ui button blue right'>Add Contact</button>
        </Link>
        <div className = "ui celled list">
        {renderContactList}
        </div>
      </div> 
        </>
       
    
        
    );
}

export default ContactList;