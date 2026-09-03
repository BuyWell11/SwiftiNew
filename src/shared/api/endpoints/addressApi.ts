import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ROUTES } from '@shared/api/apiRoutes';
import { BACKEND_LINK, YANDEX_API, localizations } from '@shared/config/vars';
import { getCurrentLocale } from '@shared/config/locale';
import type { AddressDTO } from '@shared/api/types/AddressDTO';
import type { YandexAddressDTO } from '@shared/api/types/YandexAddressDTO';
import type { CustomSelectOption } from '@shared/types/CustomSelectOption';

type AddressQuery = {
  address: string;
  city: CustomSelectOption;
  maxAddress?: number;
};

type YandexResponse = {
  response: { GeoObjectCollection: { featureMember: YandexAddressDTO[] } };
};

export const addressApi = createApi({
  reducerPath: 'addressApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json;charset=utf-8');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBackendAddresses: builder.query<AddressDTO[], AddressQuery>({
      query: ({ address, city, maxAddress = 4 }) => ({
        url: `${BACKEND_LINK}${API_ROUTES.addresses}`,
        params: { address, addressesNumber: maxAddress, city: city.value },
      }),
    }),
    getYandexAddresses: builder.query<AddressDTO[], AddressQuery>({
      query: ({ address, city, maxAddress = 5 }) => {
        const params = new URLSearchParams({
          geocode: `${city.label}, ${address}`,
          lang: getCurrentLocale() === localizations.RU ? localizations.RU : localizations.EN,
          format: 'json',
          results: String(maxAddress),
        });
        const separator = YANDEX_API.includes('?') ? '&' : '?';
        return { url: `${YANDEX_API}${separator}${params.toString()}` };
      },
      transformResponse: (response: YandexResponse, _meta, arg) =>
        response.response.GeoObjectCollection.featureMember
          .map((featureMember, index): AddressDTO => {
            const geoObject = featureMember.GeoObject;
            const [longitude, latitude] = geoObject.Point.pos.split(' ').map(Number);
            return { label: geoObject.name, latitude, longitude, id: index };
          })
          .filter((address) => address.label !== arg.city.label),
    }),
  }),
});

export const { useLazyGetBackendAddressesQuery, useLazyGetYandexAddressesQuery } = addressApi;
