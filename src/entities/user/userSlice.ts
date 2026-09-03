import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { localizationOptions } from '@shared/config/vars';
import { CustomSelectOption } from '@shared/types/CustomSelectOption';

type userState = {
  localization: CustomSelectOption;
};

const initialState: userState = {
  localization:
    localizationOptions.find((option) => {
      return navigator.language.toLowerCase().startsWith(option.value.slice(0, 2));
    }) ?? localizationOptions[1],
};

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
export const { changeLocalization } = userSlice.actions;
