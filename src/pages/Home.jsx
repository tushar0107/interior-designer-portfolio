import { Link } from "react-router-dom";
import { Banner } from "../Base";

export const Home = ()=>{

	return(
		<>
			<Banner/>
			<section id="services-section">
				<h1>Our Services</h1>
				<div id="services-container">
					<div className="services">
						<img src="/images/space-planning.webp" alt="" />
						<span>Space Planning</span>
					</div>
					<div className="services">
						<img src="/images/modular-kitchen.jpg" alt="" />
						<span>Modular Kitchen</span>
					</div>
					<div className="services">
						<img src="/images/office-interior.jpg" alt="" />
						<span>Office Interior</span>
					</div>
					<div className="services">
						<img src="/images/eco-design.webp" alt="" />
						<span>Eco Design</span>
					</div>
					<div className="services">
						<img src="/images/lighting-design.jpeg" alt="" />
						<span>Lighting Design</span>
					</div>
					<div className="services">
						<img src="/images/art-interior.webp" alt="" />
						<span>Art Curation</span>
					</div>
				</div>
			</section>

			<section id="section-about" className="dark-background">
				<div id="about-container">
					<div className="about-content">
						<span>A few words about us</span>
						<h2>A study of creativity</h2>
						<span>We assess the available space and determine the floor plan, furniture placement, and traffic flow. Space planning is considered a crucial and basic aspect of interior design.</span>
						<Link to={'/contact'}><button className="secondary">Contact us</button></Link>
					</div>
					<div id="about-images-container">
						<div id="about-images">
							<img src="/images/interior-designer.webp" className="img-1" alt="" />
							<img src="/images/interior-designer.webp" className="img-2" alt="" />
							<img src="/images/interior-designer.webp" className="img-2" alt="" />
							<img src="/images/interior-designer.webp" className="img-1" alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}