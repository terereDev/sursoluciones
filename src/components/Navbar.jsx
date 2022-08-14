import React from 'react'
import {BiHomeAlt,BiInfoSquare, BiImageAlt, BiMailSend} from 'react-icons/bi'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <nav className='topnav responsive'>
          <Link to='/' className='links brand active'><BiHomeAlt></BiHomeAlt></Link>
          <div>
            <Link to="/About" className='links'><BiInfoSquare></BiInfoSquare></Link>
            <Link to="/News" className='links'><BiImageAlt></BiImageAlt></Link>
            <Link to="/Contact" className='links'><BiMailSend></BiMailSend></Link>
          </div>
        </nav>

    </div>
  )
}

export default Navbar