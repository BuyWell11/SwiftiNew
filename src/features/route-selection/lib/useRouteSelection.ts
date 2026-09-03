import { useCallback, useState } from 'react';
import { useLazyGetRouteQuery } from '@shared/api/endpoints/routeApi';
import { getErrorMessage } from '@shared/api/getErrorMessage';
import { useToast } from '@shared/hooks/useToast';
import type { Route } from '@entities/route';
import type { Way } from '@shared/types/Way';

export function useRouteSelection() {
  const { showToast } = useToast();
  const [optimalWay, setOptimalWay] = useState<Way | null>(null);
  const [defaultWay, setDefaultWay] = useState<Way | null>(null);
  const [isOptimalSelected, setIsOptimalSelected] = useState(true);
  const [requestError, setRequestError] = useState<string | null>(null);
  const [getRoute, { isLoading }] = useLazyGetRouteQuery();

  const handleSubmit = useCallback(
    async (route: Route) => {
      setRequestError(null);
      try {
        const data = await getRoute(route).unwrap();
        setOptimalWay(data.optimal);
        setDefaultWay(data.default);
      } catch (error) {
        const message = getErrorMessage(error, 'Unable to load route');
        setRequestError(message);
        showToast(message, 'error');
      }
    },
    [getRoute, showToast],
  );

  return {
    optimalWay,
    defaultWay,
    isOptimalSelected,
    isLoading,
    requestError,
    handleSubmit,
    selectOptimal: () => setIsOptimalSelected(true),
    selectDefault: () => setIsOptimalSelected(false),
  };
}
