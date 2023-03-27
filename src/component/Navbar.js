import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar({ func, info, story, gallery, party, home }) {
  // set nav color on scrolling
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  // setting  toggle for mobile menu
  const [toggleState, setToggleState] = useState(false);

  const handleClick = () => {
    setToggleState((toggleState) => !toggleState);
  };

  let toggleLinkCheck = toggleState ? ' active' : '';

  return (
    <nav className={color ? 'nav nav-bg' : 'nav'}>
      <div className='container-lg'>
        <Link to='/' onClick={() => func(home)}>
          <h3>Oluwaseun&Oluwatimilehin</h3>
        </Link>

        <i onClick={handleClick} className='bx bx-menu'></i>
        <div className={`links${toggleLinkCheck}`}>
          <Link
            to='#info'
            className='link'
            onClick={() => {
              func(info);
              handleClick();
            }}
          >
            Info & RSVP
          </Link>
          <Link
            to='#story'
            className='link'
            onClick={() => {
              func(story);
              handleClick();
            }}
          >
            Our Story
          </Link>
          <Link
            to='#party'
            className='link'
            onClick={() => {
              func(party);
              handleClick();
            }}
          >
            Party
          </Link>
          <Link
            to='#gallery'
            className='link'
            onClick={() => {
              func(gallery);
              handleClick();
            }}
          >
            Gallery
          </Link>
          <i className='bx bx-x' onClick={handleClick}></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
