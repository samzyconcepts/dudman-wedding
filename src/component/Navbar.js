import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'
function Navbar() {
  const [toggleState, setToggleState] = useState(false);

  const handleClick = ()=>{
    setToggleState(toggleState => !toggleState)
  }

  let toggleLinkCheck = toggleState ? ' active' : '';

  return (
    <nav className='nav'>
      <div className="container-lg">
          <Link to='/'><h3>Oluwaseun&Oluwatimilehin</h3></Link>
          
          <i 
          onClick={handleClick}
          className='bx bx-menu'></i>
          <div className={`links${toggleLinkCheck}`}>
            <Link to='#info'>Info & RSVP</Link>
            <Link to='#story'>Our Story</Link>
            <Link to='#party'>Party</Link>
            <Link to='#gallery'>Gallery</Link>
            <i className='bx bx-x' onClick={handleClick} ></i>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
