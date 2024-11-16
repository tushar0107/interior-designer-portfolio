import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/UserSlice";


export const Login = ()=>{
	const [username,setUserName] = useState('');
	const [password,setPassword] = useState('');
	const [passShow,setPassShow] = useState(false);
	// const user = useSelector(state=>state.user);
	const dispatch = useDispatch();

	return(
		<>
		 <div id="login-modal">
			<form action="" id="login-container">
				<h2>Login</h2>
				<label htmlFor="username">
					<input type="text" value={username} onChange={(e)=>setUserName(e.target.value)}></input>
					<span style={username?{top:'0px',left: '.3rem',fontSize: '0.8rem'}:null}>Enter Username</span>
				</label>
				<label htmlFor="password">
					<input type={passShow?"text":"password"} value={password} onChange={(e)=>setPassword(e.target.value)}></input>
					<img src={`/images/${passShow?'hide.png':'show.png'}`} onClick={()=>setPassShow(!passShow)} className="pass-show-hide" alt="" />
					<span style={password?{top:'0px',left: '.3rem',fontSize: '0.8rem'}:null}>Enter Password</span>
				</label>
				<div className="submit">
					<button type="button" className="submit-btn btn" onClick={()=>{dispatch(login({username:username,password:password}))}}>Submit</button>
					<span>OR</span> 
					<button type="button" className="sign-up-btn btn">Sign up</button>
				</div>
			</form>
		 </div>
		 </>
	);
}