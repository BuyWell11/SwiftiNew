import {createSlice} from "@reduxjs/toolkit";
import {localizations} from "../vars";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    localization: navigator.language === localizations.RU || navigator.userLanguage === localizations.RU ? localizations.RU : localizations.EN,
  },
  reducers: {
    changeLocalization(state, action) {
      if (state.localization === action.payload.value) {
        return;
      }
      state.localization = action.payload.value;
    },
  },
});

export default userSlice.reducer;
export const {changeLocalization} = userSlice.actions;