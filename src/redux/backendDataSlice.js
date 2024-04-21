import {createSlice} from "@reduxjs/toolkit";


const backendDataSlice = createSlice({
  name: 'backendData',
  initialState: {
    addresses: null,
    cites: null,
    languages: null,
  },
  reducers: {
    updateAdresses(state, action) {

    }
  }
})