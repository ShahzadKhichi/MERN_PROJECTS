import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReduer';
import { authApi } from '@/services/api/authApi';

export const appStore = configureStore({
    reducer: rootReducer,
    middleware:(defaultMiddleware)=>defaultMiddleware().concat(authApi.middleware)
})