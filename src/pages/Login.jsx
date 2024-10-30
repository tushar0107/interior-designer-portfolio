import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/UserSlice";


export const Login = ()=>{
	const [username,setUserName] = useState('');
	const [password,setPassword] = useState('');
	const dispatch = useDispatch();

	return(
		<>
		 <div id="login-modal">
			<div id="login-container">
				<h2>Login</h2>
				<label htmlFor="username">
					<input type="text" value={username} onChange={(e)=>setUserName(e.target.value)}></input>
					<span>Enter Username</span>
				</label>
				<label htmlFor="password">
					<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
					<span>Enter Password</span>
				</label>
				<button type="submit" onClick={()=>dispatch(login({username,password}))}>Submit</button>
			</div>
		 </div>
		 </>
	);
}