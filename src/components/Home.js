import React from 'react'
// import icon2 from '../icon-2.svg'
import icon3 from '../icon-3.svg'
import icon4 from "../icon-4.svg"

// import img1 from '../shashwat.jpg'
// import img2 from '../shashank.jpg'



export default function Home() {
	return (
		<div>		
			<img className='img icon-3' src={icon3} alt=""/>
			<div className="Text1">
				<h1 className="Text" id="H1">SHASHANK</h1>
				<h1 className="Text" id="T1">SANKET</h1>
				<h3 className="Text" id="T2">Coding Is A Direct Path Towards Evolution</h3>
				{/* <img className='img img1' src={img1} alt=""/>
				<p id="p1">Shashwat Sanket</p>
				<p id="p1a">Working as SDE at PAYPAL</p> */}
				{/* <img className='img img2' src={img2} alt=""/>
				<p id="p2">Shashank Sanket</p>
				<p id="p2a">2nd Year B.TECH Student</p> */}
				<div className='social-links'> 
					<ul className="social-network social-circle">
						<li><a href="/" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
						<li><a href="/" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
						<li><a href="/" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
						<li><a href="/" className="icoInstagram" title="Instagram"><i className="fa fa-instagram"></i></a></li>
            		</ul>
				</div>
				<button type="button" id="btn1" className="btn btn-success">See My Resume</button>
			</div>
			<h1 className='Text2'>What I Do?</h1>
			<div class="content2">
				<img className="img icon4" src={icon4} alt=""/>
				<div className='Text3'>
					<h1>Full Stack Web Developer!</h1>
					<ul>
						<li id="l1">⚡Making Responsive Websites.</li>
						<li id="l2">⚡Implementing Various Designs To A Website.</li>
						<li id="l3">⚡Creating Application Backend using Node and Express Js.</li>
						<li id="l4">⚡Well-Exprienced in Front-End-development.</li>
						<li id="l5">⚡Can Create Complex Websites Efficiently.</li>	
						<li id="l3">⚡Creating Application Backend using Node and Express Js.</li>
						<li id="l4">⚡Well-Exprienced in Front-End-development.</li>
						<li id="l5">⚡Can Create Complex Websites Efficiently.</li>
						<li id="l3">⚡Creating Application Backend using Node and Express Js.</li>
						<li id="l4">⚡Well-Exprienced in Front-End-development.</li>
						<li id="l5">⚡Can Create Complex Websites Efficiently.</li>	
					</ul>
				</div>
			</div>
		</div>
	)
}

