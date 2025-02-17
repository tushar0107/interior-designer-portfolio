import { Link } from "react-router-dom";

export const About = ()=>{

	return(
		<div id="about-page">
			<div id="about-banner">
				<h1>About Us</h1>
			</div>
			<div className="about-content">
					<h2>Crafting Spaces, Creating Experiences</h2>
					<p>Welcome to Epitome Interiors, where creativity meets functionality to transform spaces into stunning, livable works of art. With a passion for design and an eye for detail, we specialize in creating interiors that reflect your personality, lifestyle, and vision.</p>
				
			</div>
			<div className="about-content">
					<h2>Who We Are</h2>
					<p>At Epitome Interiors, we believe that great design is not just about aesthetics—it's about storytelling, functionality, and harmony. Whether it's a cozy home, a modern office, or a luxurious space, our team is dedicated to bringing your dream interiors to life.</p>
				
			</div>
			<div className="about-content">
					<h2>Our Design Philosophy</h2>
					<p>We take a holistic approach to interior design, focusing on: <br />
					✅ <strong>Personalization</strong> - Every space is unique, just like its owner. <br />
					✅ <strong>Functionality</strong> - Smart layouts and space optimization for seamless living. <br />
					✅ <strong>Sustainability</strong> - Eco-friendly materials and energy-efficient designs. <br />
					✅ <strong>Timeless Aesthetics</strong> - Elegant designs that never go out of style. <br />
					</p>
				
			</div>
			<div className="about-content bg-dark-block">
					<h2>Let's Bring Your Vision to Life!</h2>
					<p>Whether you're looking to renovate, redesign, or build from scratch, we're here to help. Let's create a space that speaks to you. <br />
						<Link to={'/contact'}><span className="hyperlink"><strong>Contact us</strong></span></Link> today to start your design journey! <br />
						Would you like to add a personal touch or specific achievements?</p>				
			</div>
		</div>
	);
}