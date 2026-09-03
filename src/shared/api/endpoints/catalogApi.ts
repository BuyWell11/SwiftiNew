import { baseApi } from '@shared/api/baseApi';
import { API_ROUTES } from '@shared/api/apiRoutes';
import type { CustomSelectOption } from '@shared/types/CustomSelectOption';
export const catalogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCities: builder.query<CustomSelectOption[], void>({
      query: () => API_ROUTES.cities,
    }),
  }),
});

export const { useGetCitiesQuery } = catalogApi;
