import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './NavBar.css'
const NavBar = () => {
  return (

      <div className="links">
        <div className='empty'>
        </div>  
          <ul>
            <li><Link to ='/' >Shop</Link></li>
            <li><Link to ='/cart' ><ShoppingCart size={32}/></Link></li>
          </ul>
         
      </div>
  )
}

export default NavBar
