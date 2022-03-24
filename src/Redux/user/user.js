import { createSlice } from "@reduxjs/toolkit";
export const userSlice= createSlice({
    name:"user_state",initialState:{value:null},
    
    reducers:{

        change_user_state:(state,action)=>{
            state.value=action.payload.user_state
        }
    }
})

export const {change_user_state}=userSlice.actions;
export default  userSlice.reducer 