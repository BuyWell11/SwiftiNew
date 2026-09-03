import { baseApi } from '@shared/api/baseApi';
import { API_ROUTES } from '@shared/api/apiRoutes';
import type { Route } from '@entities/route';
import type { WaysDTO } from '@shared/api/types/WaysDTO';

export const routeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRoute: builder.query<WaysDTO, Route>({
      query: (route) => ({
        url: API_ROUTES.taxi,
        params: {
          startPoint: route.startPoint,
          endPoint: route.endPoint,
          walkingTime: route.walkingTime,
          city: route.city,
        },
      }),
    }),
  }),
});

export const { useLazyGetRouteQuery } = routeApi;
