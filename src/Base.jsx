import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./Context";


export const Base = ()=>{

	return(
		<>

		</>
	);
}

const NavLinks = ()=>{
	const {setMenuOpen} = useContext(AppContext);
	return(
		<>
		<Link to={'/'} onClick={()=>setMenuOpen(false)}>Home</Link>
		<Link to={'/aboutus'} onClick={()=>setMenuOpen(false)}>About</Link>
		<Link to={'/services'} onClick={()=>setMenuOpen(false)}>Services</Link>
		<Link to={'/contact'} onClick={()=>setMenuOpen(false)}>Contact</Link>
		</>
	);
}

const AuthLinks = ()=>{
	const {setMenuOpen} = useContext(AppContext);
	return(
		<>	
			<div id="auth-actions">
				<Link to={'/login'} onClick={()=>{setMenuOpen(false)}}>Log In</Link>
				<Link to={'/login'} onClick={()=>{setMenuOpen(false)}} className="sign-up-btn">Sign Up</Link>
			</div>
		</>
	);
}

export const Header = ()=>{
	const {menuOpen,setMenuOpen} = useContext(AppContext);

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
	const banners = useRef();

	const scrolled = (e)=>{
		const slides = e.target.children;
		for(let i=0;i<slides.length;i++){
			const slide = slides[i];
			if(slide.getBoundingClientRect().left>=0 && slide.getBoundingClientRect().right<=window.innerWidth){
				setSlideActive(i);
			}
		}
	}

	const slide = (dir)=>{
		var currentSlide = slideActive;
		const bannerSlides = banners.current.children;
		const bannerLength = bannerSlides.length;
		if(dir==='right'){
			if(currentSlide>=bannerLength-1){
				currentSlide = 0;
			}else{
				currentSlide = currentSlide+1;
			}
			bannerSlides[currentSlide].scrollIntoView();
		}else if(dir==='left'){
			if(currentSlide<=0){
				currentSlide = bannerLength-1;
			}else{
				currentSlide = currentSlide - 1;
			}
			bannerSlides[currentSlide].scrollIntoView();
		}
		setSlideActive(currentSlide);
	}
	useEffect(()=>{
	},[]);


	return(
		<div id="banner-container" onScrollCapture={(e)=>{scrolled(e)}}>
			<div id="banner">
				<div id="banner-slides" ref={banners}>
					<div className="banner-slide" style={{backgroundImage:'url("/images/banner-5.jpg")'}}></div>
					<div className="banner-slide" style={{backgroundImage:'url("/images/space-planning.webp")'}}></div>
					<div className="banner-slide" style={{backgroundImage:'url("/images/interior-designer.webp")'}}></div>
					<div className="banner-slide" style={{backgroundImage:'url("/images/banner-2.jpg")'}}></div>
				</div>
				<div id="arrow-btns">
					<span className="left-arrow" onClick={()=>slide('left')}></span>
					<span className="right-arrow" onClick={()=>slide('right')}></span>
				</div>
			</div>
			<div id="slider-markers">
				<div className={"marker "+(slideActive%4===0? "active":null)}></div>
				<div className={"marker "+(slideActive%4===1? "active":null)}></div>
				<div className={"marker "+(slideActive%4===2? "active":null)}></div>
				<div className={"marker "+(slideActive%4===3? "active":null)}></div>
			</div>
		</div>
	);
}