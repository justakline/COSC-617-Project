import React, {useEffect, useState} from 'react'
import axios from 'axios'
import DraggableChat from './ChatWindow/DraggableChat';
import  './App.css'
const App = () => {
  // const [users, setUsers] = useState([])
  // const getData = async() => {
  //   const res = await axios.get('/api/users')
  //   setUsers(res.data)
  // }

  // useEffect(() => {
  //   getData()
  // }, [])
 
  const [users, setUsers] = useState([])
  const [messages, setMessages] = useState([])
  const [JohnMessages, setJohnMessages] = useState([])
  
  const getUserData = async() => {
    const res = await axios.get('/api/users')
    if(res){
      setUsers(res.data)
      return  
    }
    
  }
  
  const getMessageData = async() => {
    const res = await axios.get('/api/messages')
    if(res){
      setMessages(res.data)
      return  
      
    }
  }
  
  const getMessageDataById = async() => {
    const res = await axios.get('/api/messages/Johndoe')
    if(res){
      setJohnMessages(res.data)
      return  
      
    }
  }
  
  // Returning 404s right now :(
  useEffect(() => {
    getUserData()
    getMessageData()
    getMessageDataById()
  }, [])
  

  return (
    <div className="App">
      <DraggableChat />
      <DraggableChat />
    <div>
      {/* {users.map(u => <h4 key={u._id}>userName : {u.userName}</h4>)} */}
      {/* {messages.map(u => <h4 key={u._id}>message : {u.message}</h4>)} */}
      {/* {JohnMessages.map(u => <h4 key={u._id}>John's message : {u.message}</h4>)} */}
    </div>
    </div>
  )
}

export default App