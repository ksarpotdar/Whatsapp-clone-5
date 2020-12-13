import React,{useEffect, useState} from 'react'
import './SidebarChat.css'
import {Avatar} from "@material-ui/core"

import db from "./firebase"
import {Link} from "react-router-dom"

export default function SidebarChat({id,name,addNewChat}) {
 
  const [seed, setSeed] = useState("")

  const createChat = () => {
    const roomName = prompt("Please Enter the Name for Chat");

    if(roomName){
      db.collection("rooms").add({
        name : roomName
      })
    }

  }
  
  
  useEffect(()=>{
    setSeed(Math.floor(Math.random() * 5000))
  },[])
  return(!addNewChat ? (
    <Link to={`/rooms/${id}`}>
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`}/>
      <div className="sidebarChat_info">
        <h3>{name}</h3>
        <p>Last Message</p>
      </div>
    </div>
    </Link>
  ) : ( <div onClick={createChat} className="sidebarChat"><h4>Add new Chat Room</h4></div>))
}
