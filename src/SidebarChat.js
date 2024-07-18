import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import { Avatar } from '@mui/material'
import db from './firebase-db';
import { Link } from 'react-router-dom';

function SidebarChat({id, name, addNewChat }) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    
    const createChat = () => {
        const roomName = prompt("Please enter name for chat room");
        if(roomName){
            db.collection('/rooms').add({
                name: roomName
            });
        }
    };
    

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}`}/>
                <div className='sidebarChat_info'>
                    <h2>{name}</h2>
                    <p>Last message...</p>
                </div>
            </div>
        </Link>
        
    ) : (
            <div onClick={createChat} 
                className='sidebarChat'>
                <h2>Add new Chat</h2>
            </div>
    );
}

export default SidebarChat