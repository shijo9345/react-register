import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeScreen = () => {
    const navigate = useNavigate();
  return (
    <div className='home-screen'>
        <button onClick={()=>navigate("/register")}>Register Page</button>
        <button onClick={()=>navigate("/display")}>Display Page</button>
    </div>
  )
}

export default HomeScreen