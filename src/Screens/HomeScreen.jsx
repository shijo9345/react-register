import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/Home.css'

const HomeScreen = () => {
    const navigate = useNavigate();
  return (
    <div className='body'>
      <h1>Home Page</h1>
       <div className='home-screen'>
        <button onClick={()=>navigate("/register")}>Register Page</button>
        <button onClick={()=>navigate("/display")}>Display Page</button>
    </div>
    </div>

  )
}

export default HomeScreen