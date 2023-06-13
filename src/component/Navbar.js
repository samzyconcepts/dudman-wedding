import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar() {
	// set nav color on scrolling
	const [color, setColor] = useState(false)
	// setting  toggle for mobile menu
	const [toggleState, setToggleState] = useState(false)

	const changeColor = () => {
		if (window.scrollY >= 100) {
			setColor(true)
		} else {
			setColor(false)
		}
	}

	window.addEventListener('scroll', changeColor)

	const handleClick = () => {
		setToggleState((toggleState) => !toggleState)
	}

	let toggleLinkCheck = toggleState ? ' active' : ''

	return (
		<nav className={color ? 'nav nav-bg' : 'nav'}>
			<div className='container-lg'>
				<a href='/'>
					<h3>Oluwaseun&Oluwatimilehin</h3>
				</a>

				<i onClick={handleClick} className='bx bx-menu'></i>
				<div className={`links${toggleLinkCheck}`}>
					<a href='#info' className='link' onClick={handleClick}>
						Info & RSVP
					</a>
					<a href='#story' className='link' onClick={handleClick}>
						Our Story
					</a>
					<a href='#party' className='link' onClick={handleClick}>
						Party
					</a>
					<a href='#gallery' className='link' onClick={handleClick}>
						Gallery
					</a>
					<Link to='/vendors' className='link' onClick={handleClick}>
						Vendors
					</Link>
					<i className='bx bx-x' onClick={handleClick}></i>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
