import "./Templates.scss"
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import elg from "../../images/crsl1.jpg"
import temp2 from "../../images/crsl2.jpg"
import temp3 from "../../images/crsl3.jpg"
import temp4 from "../../images/crsl4.jpg"
import temp5 from "../../images/crsl5.jpg"
import temp6 from "../../images/crsl6.jpg"
import temp7 from "../../images/crsl7.jpg"
import temp8 from "../../images/crsl8.jpg"
import temp9 from "../../images/crsl9.jpg"
import elg1 from "../../images/elg1.jpg"
import elg2 from "../../images/elg2.jpg"
import elg3 from "../../images/elg3.jpg"
import elg4 from "../../images/elg4.jpg"
import elg5 from "../../images/elg5.jpg"
import elg6 from "../../images/elg6.jpg"
import elg7 from "../../images/elg7.jpg"

function Templates() {
	return (
		<div className='templates' id="templates">
			<div className="templates__text--box">
				<h1>Choose your style.</h1>
				<p>If standard model is not for you, we help you to find your unique style. Look on this carousel.</p>
			</div>

			<div className="templates__style--box">

				<div className="carousel--box carousel--box1">
					<Carousel>
						<div>
							<img src={elg} />
							<p className="hotel">MODERN</p>
						</div>
						<div>
							<img src={temp2} />
							<p className="hotel">MODERN</p>
						</div>
						<div>
							<img src={temp3} />
							<p className="hotel">MODERN</p>
						</div>
						<div>
							<img src={temp4} />
							<p className="hotel">MODERN</p>
						</div>
						<div>
							<img src={temp5} />
							<p className="hotel">MODERN</p>
						</div>
						<div>
							<img src={temp6} />
							<p className="hotel">MODERN</p>
						</div>
						<div>
							<img src={temp7} />
							<p className="hotel">MODERN</p>
						</div>
						<div>
							<img src={temp8} />
							<p className="hotel">MODERN</p>
						</div>
						<div>
							<img src={temp9} />
							<p className="hotel">MODERN</p>
						</div>
					</Carousel>
				</div>

				<div className="carousel--box carousel--box2">
					<Carousel>
						<div>
							<img src={elg1} />
							<p className="hotel">ELEGANT</p>
						</div>
						<div>
							<img src={elg2} />
							<p className="hotel">ELEGANT</p>
						</div>
						<div>
							<img src={elg3} />
							<p className="hotel">ELEGANT</p>
						</div>
						<div>
							<img src={elg4} />
							<p className="hotel">ELEGANT</p>
						</div>
						<div>
							<img src={elg5} />
							<p className="hotel">ELEGANT</p>
						</div>
						<div>
							<img src={elg6} />
							<p className="hotel">ELEGANT</p>
						</div>
						<div>
							<img src={elg7} />
							<p className="hotel">ELEGANT</p>
						</div>
					</Carousel>
				</div>
			</div>
		</div>
	)
}

export default Templates