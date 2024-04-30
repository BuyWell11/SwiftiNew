import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"
import backendReducer from "./backendDataSlice.js"


export default configureStore({
  reducer: {
    user: userReducer,
    backendData: backendReducer,
  },
});
