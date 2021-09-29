import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const{id,name,email,phone,website}=props.user
    const url=`/friend/${id}`
    return (
        <div className="friend">
            <h3>Name : {name} {id}</h3>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <p>Website : {website}</p>
            <Link to={url}>Visit Me</Link>
            
        </div>
    );
};

export default Friend;