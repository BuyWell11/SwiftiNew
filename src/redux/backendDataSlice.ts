import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import RequestService from "../services/RequestService.js";
import {CustomSelectOption} from "../models/CustomSelectOption";

type backendDataState = {
    cities: CustomSelectOption[];
    languages: CustomSelectOption[];
    loading: boolean;
    error: any;
}

export const fetchLanguages = createAsyncThunk<CustomSelectOption[], undefined, { rejectValue: string }>(
    'backendData/fetchLanguages',
    async (_, {rejectWithValue}) => {
        try {
            return await RequestService.getLanguages()
        } catch (error: any) {
            console.error('Error occurred while fetching languages:', error);
            return rejectWithValue(error);
        }
    }
)

const initialState: backendDataState = {
    cities: [],
    languages: [],
    loading: false,
    error: null,
}

const backendDataSlice = createSlice({
    name: 'backendData',
    initialState,
    reducers: {},
    extraReducers: (builder) => { // Используйте builder callback notation
        builder
            .addCase(fetchLanguages.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLanguages.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload)
                state.languages = action.payload;
            })
            .addCase(fetchLanguages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
})

export default backendDataSlice.reducer