var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RequestService from "../services/RequestService.js";
export const fetchLanguages = createAsyncThunk('backendData/fetchLanguages', (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { rejectWithValue }) {
    try {
        return yield RequestService.getLanguages();
    }
    catch (error) {
        console.error('Error occurred while fetching languages:', error);
        return rejectWithValue(error);
    }
}));
export const fetchCities = createAsyncThunk('backendData/fetchCities', (_2, _b) => __awaiter(void 0, [_2, _b], void 0, function* (_, { rejectWithValue }) {
    try {
        return yield RequestService.getCities();
    }
    catch (error) {
        console.error('Error occurred while fetching cities:', error);
        return rejectWithValue(error);
    }
}));
const initialState = {
    cities: [],
    languages: [],
    loading: false,
    error: null,
};
const backendDataSlice = createSlice({
    name: 'backendData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLanguages.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchLanguages.fulfilled, (state, action) => {
            state.loading = false;
            state.languages = action.payload;
        })
            .addCase(fetchLanguages.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
            .addCase(fetchCities.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchCities.fulfilled, (state, action) => {
            state.loading = false;
            state.cities = action.payload;
        })
            .addCase(fetchCities.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});
export default backendDataSlice.reducer;
