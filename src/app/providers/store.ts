import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@entities/user';
import { baseApi } from '@shared/api/baseApi';
import { addressApi } from '@shared/api/endpoints/addressApi';
import { setCurrentLocale } from '@shared/config/locale';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware, addressApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setCurrentLocale(store.getState().user.localization.value);
store.subscribe(() => setCurrentLocale(store.getState().user.localization.value));

export default store;
