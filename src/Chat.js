import React, { useEffect, useState } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@mui/material'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import db from './firebase';

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState('');
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");

    
    useEffect(() =>{
        if(roomId){
            db.collection('/rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ));
        }
    }, [roomId]);


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You typed >>>', input);
        setInput('')
    };

  return (
    <div className='chat'>
        <div className='chat_header'>
            <Avatar src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}`}/>
            <div className='chat_headerInfo'>
                <h3>{roomName}</h3>
                <p>Last seen at...</p>
            </div>
            <div className='chat_headerRight'>
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>
        <div className='chat_body'>
            <p className='chat_message'>
                Hey guys
            </p>
            <p className={`chat_message ${true && 'chat_reciver'}`}>
                <span className='chat_name'>
                    Sarfaraz Syed
                </span>
                Hey guys
                <span className='chat_timestamp'>
                    3:52pm
                </span>
            </p>
        </div>
        <div className='chat_footer'>
            <InsertEmoticon />
            <form>
                <input value={input} onChange={e => setInput(e.target.value)}
                placeholder='Type a message' type='text' />
                <button onClick={sendMessage}
                type="submit">Send a message
                </button>
            </form>
            <Mic />
        </div>
    </div>
  )
}

export default Chat