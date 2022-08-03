import React, {useContext} from 'react'
import "../../App.css"
import {NavLink} from "react-router-dom"
import { AuthContext } from '../../Context/AuthContext'


function Navbar() {
  const{ user, dispatch}= useContext(AuthContext)

const handleLogout =()=>{

  dispatch({type:"LOGOUT"})
}

  
  return (
    <div>

        <nav className='navbar'>
            <div className='nav-container'>                               
                <ul>
                <li className='nav-item'> <a href ="http://localhost:3000/dashboard"> Dashboard</a></li>
                <li onClick = {handleLogout} className='nav-item'><a href ="http://localhost:3000/"> LOGOUT</a>
                
                         
                  
                 </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar


