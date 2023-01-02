import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import avatar2 from '../images/avatar2.png';
import Header from './Header';
import { useParams } from 'react-router-dom';


const ContactDetails = () => { 
    const LOCAL_STORAGE_KEY = 'contacts';

    const [contact, setContact] = useState([])
    
    let {id} = useParams();
    
     useEffect(() => {
        const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retrieveContacts) {
          let result = retrieveContacts.filter((e) => e.id === id)
          setContact(result);
        } 
     }, []);

     return (
        <>
        <Header/>
        <div className='main'>
        <div className='ui card centered'>
            <h1>nothingg</h1> <br/> <br/> <br/> 
            <div className='image'>
                <img src = {avatar2} alt = "avatar" />
            </div>
            {contact.length !== 0 ? contact.map((ele) => {
               return (
                <div className='content'>
                <div className='header'>{ele.name}</div>
                <div className='description'>{ele.email}</div>
            </div>
               );
            }):
            <div className='content'>
                <div className='header'>pooja</div>
                <div className='description'>vimal@gmail.com</div>
            </div>
            }
            
            <div className='center-div'>
                <Link to = '/'>
                <button className='ui button blue center'>Back to Contact List</button>
                </Link>
            </div>
        </div>
       </div> 
        </>
       
    );
}

export default ContactDetails;