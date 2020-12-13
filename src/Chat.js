import React,{useState, useEffect} from 'react'
import './Chat.css'

import {Avatar,IconButton} from "@material-ui/core"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import MicIcon from "@material-ui/icons/Mic"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutLined from "@material-ui/icons/SearchOutlined"
import AttachedFile from "@material-ui/icons/AttachFile"
import SidebarChat from './SidebarChat'
import InsertEmoticon from "@material-ui/icons/InsertEmoticon"

import {useParams} from "react-router-dom"
import db from "./firebase"

export default function Chat() {

  const [seed, setSeed] = useState("")
  const [message, setMessage] = useState("")
  const [roomName,setRoomName] = useState("")
  const {roomId} = useParams()

  useEffect(()=>{
      setSeed(Math.floor(Math.random() * 5000))
  },[])

  useEffect(()=>{
    if(roomId){
      db.collection("rooms").doc(roomId).onSnapshot(snapshot => (setRoomName(snapshot.data().name)))
    }
  },[roomId])

  function sendMessage(e){
    e.preventDefault()
    console.log("you type >>>>>"+" "+ message)
    setMessage("")
  }

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutLined />
          </IconButton>
          <IconButton>
            <AttachedFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        <p className={`chat_message ${true && "chat_reciever"}`}>
          <span className="chat_name">Subham Deb</span>
          Hey Guys
          <span className="time_stamp">3.50pm</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
          <button onClick={(e) => sendMessage(e)} type="submit" >Send a message</button>
        </form>
        <MicIcon />        
      </div>
    </div>
  )
}
