import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user:null
};

const UserSlice = createSlice({
	name:'user',
	initialState,
	reducers:{
		login:(state,action)=>{
			console.log(action);
			state.user = action.payload;
			console.log(initialState);
		},
		logout:(state)=>{
			state = null;
		}
	}
});

export const {login, logout} = UserSlice.actions;
export default UserSlice.reducer;