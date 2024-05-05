import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {localizations} from "../vars";
import {CustomSelectOption} from "../models/CustomSelectOption";

type userState = {
    localization: CustomSelectOption;
}

const initialState: userState = {
    localization: navigator.language === localizations.RU ? {
        label: "Русский",
        value: localizations.RU
    } : {label: "English", value: localizations.EN},
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeLocalization(state, action: PayloadAction<CustomSelectOption>) {
            if (state.localization.value === action.payload.value) {
                return;
            }
            state.localization = action.payload;
        },
    },
});

export default userSlice.reducer;
export const {changeLocalization} = userSlice.actions;