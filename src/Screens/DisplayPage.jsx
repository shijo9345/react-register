
import React, { useContext, useState } from 'react'
import { AppContext } from '../App';
import "../Screens/css/display.css"
import { Navigate, useNavigate } from 'react-router-dom';

    
const DisplayPage = () => {
  const { data, setData } = useContext(AppContext);
  const navigate = useNavigate();
  return (
   <div className='body'>
    <h1 className='h'>Registration Details</h1>
     <table>
    <thead>
        <tr className="header">
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
        </tr>
    </thead>
    <tbody>

        {
            data.map((items,index)=>{
                return(
                <tr>
                    <td>{items.name}</td>
                    <td>{items.email}</td>
                    <td>{items.address}</td>
                    <td>{items.phone}</td>
                   
                </tr>
                );
            })
        }
    </tbody>
</table>
        <button onClick={()=>{
            navigate("/")
        }} style={{marginTop:"60px"}}>Back</button>
   </div>
  )
}

export default DisplayPage