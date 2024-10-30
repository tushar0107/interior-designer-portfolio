import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
	name:'user',
	initialState:{username:null},
	reducers:{
		login:(state,action)=>{
			console.log(action);
			state = action.payload;
		},
		logout:(state)=>{
			state = null;
		}
	}
});

export const {login, logout} = UserSlice.actions;
export default UserSlice.reducer;