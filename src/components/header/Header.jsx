import React, { useState } from 'react'
import './Header.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import { IoMdLaptop } from "react-icons/io"

function Header() {
	const [show, setShow] = useState(false)

	return (
		<div className="nav">
			<div className="nav-container">
				<ul className='ul-first'>
					<li className="logo"><AnchorLink href="#introduction">HOME</AnchorLink></li>
					<li className="meeting"><AnchorLink href="#meeting">MEETING</AnchorLink></li>
					<li className="buenos"><AnchorLink href="#buenos">BUENOS</AnchorLink> </li>
					<li className="tour"><AnchorLink href="#tour">TOUR</AnchorLink></li>
					<li className="PRICING"><AnchorLink href="#price">PRICING</AnchorLink></li>
					{/* <li className='personal'><AnchorLink href="#stretching">STRETCHING</AnchorLink></li> */}
					<GiHamburgerMenu style={{ fontSize: "1.5em" }} onClick={() => setShow(!show)} />
				</ul >
				{show && <ul className='ul-second'>
					<li className="meeting"><AnchorLink href="#meeting">MEETING</AnchorLink></li>
					<li className="buenos"><AnchorLink href="#buenos">BUENOS</AnchorLink> </li>
					<li className="tour"><AnchorLink href="#tour">TOUR</AnchorLink></li>
					<li className="PRICING"><AnchorLink href="#price">PRICING</AnchorLink></li>
					{/* <li className="personal"><AnchorLink href="#stretching">STRETCHING</AnchorLink></li> */}
				</ul>}
			</div>
		</div>
	)
}

export default Header