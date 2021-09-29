import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {friendId}=useParams()
    const[friend,setFriend]=useState([])
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    return (
      
        <div>
            
            <h1>Details Comming Soon {friendId}</h1>
            <h2>{friend.name}</h2>
        </div>
    );
};

export default FriendDetails;