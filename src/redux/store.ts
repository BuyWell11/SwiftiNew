import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"
import backendReducer from "./backendDataSlice.js"


const store = configureStore({
    reducer: {
        user: userReducer,
        backendData: backendReducer,
    },
});

export default store;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch