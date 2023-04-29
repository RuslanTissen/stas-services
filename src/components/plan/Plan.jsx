import "./Plan.scss"
import Button from '@mui/material/Button';
import React from 'react'

function Plan() {
	return (
		<div className="plan" id="plan">

			<div className="plan__h1--box1 plan__h1--box">
				<h1>Choose one of our plans</h1>
				{/* <p></p> */}
			</div>

			<div className="plan__price--box">
				<div className="price1 price__box">
					<div className="price__box--h2">
						<h1>Standard</h1>
						<h3><mark>200</mark>$</h3>
						<Button href='mailto:tissenstudio@gmail.com' variant="contained" color="info">Contact</Button>							
					</div>

					<div className="price__box--h3">
						<h3>2 Meetings</h3>
						<h3>1 Page</h3>
						<h3>Responsive page</h3>
						<h3>Min. 3 or Max. 5 Blocks</h3>
						<h3>1 Animation</h3>
						<h3>2-3 Buttons</h3>
						<h3>2-3 Links</h3>
					</div>
				</div>

				<div className="price2 price__box">
					<div className="price__box--h2">
						<h1>Progressive</h1>
						<h3><mark>300</mark>$</h3>
						<Button href='mailto:tissenstudio@gmail.com' variant="contained" color="info">Contact</Button>							
					</div>
					<div className="price__box--h3">
						<h3>3 Meetings</h3>
						<h3>1 Main Page + 3 Pages</h3>
						<h3>Responsive page</h3>
						<h3>Min. 5 or Max. 7 Blocks</h3>
						<h3>2 Animation</h3>
						<h3>up to 5 Buttons</h3>
						<h3>up to 5 Links</h3>
					</div>
				</div>

				<div className="price3 price__box">
					<div className="price__box--h2">
						<h1>Clever saving</h1>
						<h3>Only <mark>30</mark>$/24month</h3>
						<Button href='mailto:tissenstudio@gmail.com' variant="contained" color="info">Contact</Button>							
					</div>
					<div className="price__box--h3">
						<h3>Standard plan + Support</h3>
					</div>
				</div>

				<div className="price4 price__box">
					<div className="price__box--h2">
						<h1>Clever</h1>
						<h3>Only <mark>40</mark>$/24month</h3>
						<Button href='mailto:tissenstudio@gmail.com' variant="contained" color="info">Contact</Button>							
					</div>
					<div className="price__box--h3">
						<h3>Progressive plan + Support</h3>
					</div>
				</div>
			</div>

			<div className="plan__h1--box2 plan__h1--box">
				<h1>Your requirements are special?</h1>
				{/* <p></p> */}
				<Button href='mailto:tissenstudio@gmail.com' variant="contained" color="info">Contact</Button>							
			</div>

		</div>
	)
}

export default Plan