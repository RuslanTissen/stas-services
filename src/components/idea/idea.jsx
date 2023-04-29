import React, { useEffect } from 'react'
import "./Idea.scss"
import img1 from "../../images/idea-1.jpg"
import img2 from "../../images/idea-2.jpg"
import img3 from "../../images/idea-3.jpg"
import img4 from "../../images/idea-4.jpg"
import img5 from "../../images/idea-5.jpg"
import Button from '@mui/material/Button';
// import trans from '../Trans.js'
// import { useContext } from 'react';
// import { Context } from '../Context';

function Idea(props) {
	// const { lang, } = useContext(Context)
	// console.log(lang)
	// // const check = localStorage.getItem("lang")
	// // console.log(check) 

	// // console.log(props)


	return (
		<div className='idea' id='idea'>
			<div className="idea__text--container">
				{/* <h1>{trans[lang].design}</h1> */}
				<p>Website design is one of the most valuable tools for user experience. A clear and strict navigation structure plus a harmonious design can greatly enhance the usability of your website.</p>
			</div>
			<div className="idea__images--container">
				<div className="box--img1 box-img">
					<div className="text__box--h1"><h1>You have an idea!</h1></div>
					<div className="text__box--p">
						<h3>Next steps:</h3>
						<p>Lets start from an idea to a final project. There are 5 steps: first meeting, web designer work, coding process, second meeting and deploy after corrections. Here we are!</p>
					</div>
				</div>

				<div className="box--img2 box-img">
					<img src={img1} alt="" className="image1 image-idea" />
					<div className="box-img__box">
						<h3>First meeting</h3>
						<p>A project kick-off meeting is the first meeting with the project team and the client of the project. This meeting is the time to establish common goals and the purpose of the project.						</p>
					</div>
				</div>

				<div className="box--img3 box-img">
					<img src={img2} alt="" className="image2 image-idea" />
					<div className="box-img__box">
						<h3>Web design work</h3>
						<p>Web designer plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips. A web designer is responsible for creating the design and layout of a website or web pages. It and can mean working on a brand new website or updating an already existing site.</p>
					</div>
				</div>

				<div className="box--img4 box-img">
					<img src={img3} alt="" className="image3 image-idea" />
					<div className="box-img__box">
						<h3>Coding process</h3>
						<p>Now web developer create a responsive web design. It is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation.</p>
					</div>
				</div>

				<div className="box--img5 box-img">
					<img src={img4} alt="" className="image4 image-idea" />
					<div className="box-img__box">
						<h3>Second meeting</h3>
						<p>Conducting the project closing meeting will allow the project team and the customer project participants and leadership to gather one last time to ensure that there are no outstanding issues or work. </p>
					</div>
				</div>

				<div className="box--img6 box-img">
					<img src={img5} alt="" className="image5 image-idea" />
					<div className="box-img__box">
						<h3>Deploy</h3>
						<p>Passing all test and checks project is ready to go live!</p>
						<Button href='mailto:tissenstudio@gmail.com' variant="contained" color="primary">Contact</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Idea