import './App.scss';
// import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import trans from './components/Trans';
import { GiHamburgerMenu } from 'react-icons/gi';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import Button from '@mui/material/Button';

// import Introduction from './components/introduction/Introduction';
// import Idea from './components/idea/idea';
// import Templates from './components/templates/Templates';
// import Plan from './components/plan/Plan';

// import wa from "./images/WhatsAppButtonGreenMedium.png"
// import { BsWhatsapp } from "react-icons/bs"

function App() {
	const [show, setShow] = useState(false)
	const [lang, setLang] = useState("es")
	console.log(lang)

	return (
		<div className="app">

			{/* <Header /> */}

			<div className="nav">
				<div className="nav-container">
					<ul className='ul-first'>
						<li className="logo"><AnchorLink href="#introduction">{trans[lang].home}</AnchorLink></li>
						<li className="meeting"><AnchorLink href="#meeting">{trans[lang].meeting}</AnchorLink></li>
						<li className="buenos"><AnchorLink href="#buenos">BUENOS</AnchorLink> </li>
						<li className="tour"><AnchorLink href="#tour">{trans[lang].tour}</AnchorLink></li>
						<li className="price"><AnchorLink href="#price">{trans[lang].price}</AnchorLink></li>
						{/* <li className='personal'><AnchorLink href="#stretching">STRETCHING</AnchorLink></li> */}
						<GiHamburgerMenu style={{ fontSize: "1.5em" }} onClick={() => setShow(!show)} />
					</ul >
					{show && <ul className='ul-second'>
						<li className="meeting"><AnchorLink href="#meeting">{trans[lang].meeting}</AnchorLink></li>
						<li className="buenos"><AnchorLink href="#buenos">BUENOS</AnchorLink> </li>
						<li className="tour"><AnchorLink href="#tour">{trans[lang].tour}</AnchorLink></li>
						<li className="price"><AnchorLink href="#price">{trans[lang].price}</AnchorLink></li>
						{/* <li className="personal"><AnchorLink href="#stretching">STRETCHING</AnchorLink></li> */}
					</ul>}
				</div>
			</div>

			<div className='app-container'>

				<div className='introduction' id='introduction'>
					<div className='introduction__language-container'>
						<button className='eng' value="es" onClick={(e) => setLang(e.target.value)}>🇦🇷</button>
						<button className='esp' value="en" onClick={(e) => setLang(e.target.value)}>🇬🇧</button>
					</div>

					<div className='introduction__text-container'>
						{/* <h1>Welcome to Buenos Aires</h1> */}
						<h1>{trans[lang].welcome}</h1>
						<h3>Sats Services</h3>
					</div>
				</div>

				<div className='meeting'>
					<div className='meeting__one-container'>
						<h1>You are first time in Buenos Aires.</h1>
						<div className='meeting__one-container--btn'>
							<Button href='#' variant="contained">{trans[lang].contact}</Button>
						</div>
					</div>
					<div className='meeting__two-container'>
						<li>{trans[lang].meetingAtAirport}</li>
						<li>{trans[lang].money}</li>
						<li>{trans[lang].sim}</li>
						<li>{trans[lang].interpreter}</li>
					</div>
				</div>

				<div className='buenos'>
					<div className='buenos__title-container'>
						<h1>Top districts</h1>
					</div>

					<div className='buenos__districts-container'>
						<div className='buenos__districts--img bue-img1'>Palermo</div>
						<div className='buenos__districts--img bue-img2'>Belgrano</div>
						<div className='buenos__districts--img bue-img3'>Tigre</div>
					</div>

					<div className='buenos__btn-container'>
						<Button href='#' variant="contained">{trans[lang].contact}</Button>
					</div>
				</div>

				{/* <Introduction /> */}

				{/* <Idea /> */}

				{/* <Templates /> */}

				{/* <Plan /> */}

			</div>

			<Footer />

		</div>
	);
}

export default App;



{/* <div id={'alq'} >
				<MidSection
					image={photo2}
					title={"Nuestro lema:"}
					text={"Nuestro personal tiene muchos años de experiencia. Y seguimos mejorando tanto los métodos de limpieza como los medios para mejorar el servicio."}
				/>
			</div> */}