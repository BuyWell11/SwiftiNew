import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import RequestService from "../services/RequestService.js";

export const fetchLanguages = createAsyncThunk(
  'backendData/fetchLanguages',
  async (_, thunkAPI) => {
    try {
      return await RequestService.getLanguages();
    } catch (error) {
      console.error('Error occurred while fetching languages:', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
)

const backendDataSlice = createSlice({
  name: 'backendData',
  initialState: {
    cities: [],
    languages: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => { // Используйте builder callback notation
    builder
      .addCase(fetchLanguages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLanguages.fulfilled, (state, action) => {
        state.loading = false;
        state.languages = action.payload.languages;
      })
      .addCase(fetchLanguages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
})

export default backendDataSlice.reducer