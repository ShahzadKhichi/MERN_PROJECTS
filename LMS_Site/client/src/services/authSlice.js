import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
    // token: null,
    // loading: false,
    // error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Add reducers here
        userLoggedIn:(state,action)=>{
            state.user=action.payload.user;
            state.isAuthenticated=true;
            // state.loading=false;
            // state.token=action.payload.token;
        },
        userLoggedOut:(state)=>{
            state.user=null;
            state.isAuthenticated=false;
            // state.token=null;
        }

    }
});

export const {userLoggedIn,userLoggedOut} = authSlice.actions;

export default authSlice.reducer;