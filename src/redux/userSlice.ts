import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {localizations} from "../vars";
import {CustomSelectOption} from "../models/CustomSelectOption";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        localization: navigator.language === localizations.RU ? localizations.RU : localizations.EN,
    },
    reducers: {
        changeLocalization(state, action: PayloadAction<CustomSelectOption>) {
            if (state.localization === action.payload.value) {
                return;
            }
            state.localization = action.payload.value;
        },
    },
});

export default userSlice.reducer;
export const {changeLocalization} = userSlice.actions;