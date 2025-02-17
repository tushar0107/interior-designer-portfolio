import { useEffect, useRef, useState } from "react";



export const Contact = ()=>{
	const [username,setUserName] = useState('');
	const [email,setEmail] = useState('');
	const [message,setMessage] = useState('');
	const input = useRef(null);
	
	useEffect(()=>{
		input.current.focus();
	},[]);

	return (
		<div id="contact-page">
			<div id="contact-banner" className="banner">
				<form action="?" id="contact-form-container">
					<h3>Book a Free Consultation Now</h3>
					<label htmlFor="username">
						<input type="text" value={username} onChange={(e)=>setUserName(e.target.value)} ref={input}></input>
						<span style={username?{top:'-1rem',left: '.3rem',fontSize: '0.8rem'}:null}>Enter Username</span>
					</label>
					<label htmlFor="email">
						<input type={"email"} value={email} onChange={(e)=>setEmail(e.target.value)}></input>
						<span style={email?{top:'-1rem',left: '.3rem',fontSize: '0.8rem'}:null}>Enter Email</span>
					</label>
					<label htmlFor="message">
						<textarea type={"email"} value={message} rows={2} onChange={(e)=>setMessage(e.target.value)}>{message}</textarea>
						<span style={message?{top:'-5rem',left: '.3rem',fontSize: '0.8rem'}:{top:'-3rem'}}>Enter Message</span>
					</label>
					<div className="submit">
						<button type="button" className="submit-btn btn" onClick={()=>{}}>Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
}