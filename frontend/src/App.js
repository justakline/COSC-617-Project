import React, {useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState([])
  const [messages, setMessages] = useState([])
  const [JohnMessages, setJohnMessages] = useState([])

  const getUserData = async() => {
    const res = await axios.get('/api/users')
    setUsers(res.data)
  }

  const getMessageData = async() => {
    const res = await axios.get('/api/messages')
    setMessages(res.data)
  }

  const getMessageDataById = async() => {
    const res = await axios.get('/api/messages/Johndoe')
    setJohnMessages(res.data)
  }

  useEffect(() => {
    getUserData()
    getMessageData()
    getMessageDataById()
  }, [])
 
  return (
    <div>
      {users.map(u => <h4 key={u._id}>userName : {u.userName}</h4>)}
      {messages.map(u => <h4 key={u._id}>message : {u.message}</h4>)}
      {JohnMessages.map(u => <h4 key={u._id}>John's message : {u.message}</h4>)}
    </div>
  )
}

export default App