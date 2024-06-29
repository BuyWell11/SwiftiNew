import { createSlice } from "@reduxjs/toolkit";
import { localizations } from "../vars";
const initialState = {
    localization: navigator.language === localizations.RU ? {
        label: "Русский",
        value: localizations.RU
    } : { label: "English", value: localizations.EN },
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeLocalization(state, action) {
            if (state.localization.value === action.payload.value) {
                return;
            }
            state.localization = action.payload;
        },
    },
});
export default userSlice.reducer;
export const { changeLocalization } = userSlice.actions;
