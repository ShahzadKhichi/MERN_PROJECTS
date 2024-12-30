import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../services/authSlice';
import { authApi } from '@/services/api/authApi';

const rootReducer = combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    auth:authReducer
})
export default rootReducer