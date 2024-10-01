import React, {useEffect, useState} from 'react'
// import axios from 'axios'
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
 
  return (
    <div className="App">
      <DraggableChat />
      <DraggableChat />
    </div>
  )
}

export default App