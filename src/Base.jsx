import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const Base = ()=>{

	return(
		<>

		</>
	);
}

const NavLinks = ()=>{
	return(
		<>
		<Link to={'/'} style={{borderBottom:window.location.pathname==='/'?'2px solid black':'none'}}>Home</Link>
		<Link to={'/aboutus'} style={{borderBottom:window.location.pathname==='/aboutus'?'2px solid black':'none'}}>About</Link>
		<Link style={{borderBottom:window.location.pathname==='/services'?'2px solid black':'none'}}>Services</Link>
		<Link style={{borderBottom:window.location.pathname==='/contact'?'2px solid black':'none'}}>Contact</Link>
		</>
	);
}

const AuthLinks = ()=>{
	const navigate = useNavigate();
	return(
		<>	
			<div id="auth-actions">
			<div onClick={()=>{navigate('/login')}}>Log In</div>
			<div onClick={()=>{navigate('/signup')}} className="sign-up-btn">Sign Up</div>
			</div>
		</>
	);
}

export const Header = ()=>{
	const [menuOpen,setMenuOpen] = useState(false);

	return(
		<header>
			<div id="logo">
				{/* <img src="/images/logo.png" alt="" /> */}
				<span>Epitome Interiors</span>
			</div>
			<div className="nav">
				<NavLinks/>
			</div>
			<AuthLinks/>
			<div id="menu-btn" onClick={()=>setMenuOpen(!menuOpen)}>
				<div className="btn-line" style={{width:'80%'}}></div>
				<div className="btn-line" style={{width:'60%'}}></div>
				<div className="btn-line" style={{width:'40%'}}></div>
			</div>
			<div id="mob-menu" style={{right:menuOpen?'0':'-100%'}}>
				<div className="nav">
					<NavLinks/>
					<AuthLinks/>
				</div>
			</div>
		</header>
	);
}

export const Banner = ()=>{
	const [slideActive,setSlideActive] = useState(0);

	const scrolled = (e)=>{
		const slides = e.target.children;
		for(let i=0;i<slides.length;i++){
			const slide = slides[i];
			if(slide.getBoundingClientRect().left>=0 && slide.getBoundingClientRect().right<=window.innerWidth){
				setSlideActive(i);
			}
		}
	}

	return(
		<div id="banner-container" onScrollCapture={(e)=>{scrolled(e)}}>
			<div id="banner">
				<div className="banner-slide" style={{backgroundColor:"beige"}}></div>
				<div className="banner-slide" style={{backgroundColor:"lightblue"}}></div>
				<div className="banner-slide" style={{backgroundColor:"teal"}}></div>
				<div className="banner-slide" style={{backgroundColor:"salmon"}}></div>
			</div>
			<div id="slider-markers">
				<div className={"marker "+(slideActive===0? "active":null)}></div>
				<div className={"marker "+(slideActive===1? "active":null)}></div>
				<div className={"marker "+(slideActive===2? "active":null)}></div>
				<div className={"marker "+(slideActive===3? "active":null)}></div>
			</div>
		</div>
	);
}