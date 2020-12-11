import React,{useEffect, useState} from 'react'
import './SidebarChat.css'
import {Avatar} from "@material-ui/core"



export default function SidebarChat({addNewChat}) {
 
  const [seed, setSeed] = useState("")

  const createChat = () => {
    const roomName = prompt("Please Enter the Name for Chat");

    if(roomName){
      
    }

  }
  
  
  useEffect(()=>{
    setSeed(Math.floor(Math.random() * 5000))
  },[])
  return(!addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`}/>
      <div className="sidebarChat_info">
        <h3>Chat Name</h3>
        <p>Last Message</p>
      </div>
    </div>
  ) : ( <div onClick={createChat} className="sidebarChat"><h4>Add new Chat Room</h4></div>))
}
