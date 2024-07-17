import React from "react";
import './Sidebar.css'
import { Avatar, IconButton } from "@mui/material";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@mui/icons-material";
import SidebarChat from "./SidebarChat";

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text"/>
                </div>          
            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
}

export default Sidebar;