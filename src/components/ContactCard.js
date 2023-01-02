import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../images/avatar.png';

const ContactCard = (props) => {
    
    const {id, name, email} = props.contactList;

    return (
        <div className = "item" style={{width : "1127px",  display : "flex", alignItems : "flex-end"}}>
            <div className = "content" style = {{width : "1127px"}}>
                <img className = "ui avatar image" src = {avatar} alt = "user" />
                <div className = "header">{name}</div>
                <div>{email}</div>
                <Link to = {{pathname: `/contactList/${id}`, state: props.contactList}}>
                <button className='' style={{width:"100px",heigth:"40px",color:"white",borderRadius:"5px",backgroundColor:"#4169E1",border:"none"}}>show details</button>
                </Link>
            </div>
             <i className = "trash alternate outline icon" 
             style = {{color : "red"}} onClick = {() => props.clickHandler(id)} ></i>
        </div>
    );
}

export default ContactCard;