import styles from './WaySelector.module.scss';
import { Box, Button, Stack } from '@mui/material';
import { useCallback, useState } from 'react';
import OptimalWayBlock from '@features/route-selection/OptimalWayBlock';
import DefaultWayBlock from '@features/route-selection/DefaultWayBlock';
import { useLazyGetRouteQuery } from '@shared/api/endpoints/routeApi';
import LinkButton from '@shared/ui/LinkButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import { Route } from '@entities/models/Route';
import { Way } from '@shared/types/Way';
import AddressesInputBlock from '@features/route-selection/AddressesInputBlock';
import { translate } from '@shared/services/LocalizationService';
import Loader from '@shared/ui/Loader';
import { useToast } from '@shared/hooks/useToast';
import { getErrorMessage } from '@shared/api/getErrorMessage';

function WaySelector() {
  const { showToast } = useToast();
  const [optimalWay, setOptimalWay] = useState<Way | null>(null);
  const [defaultWay, setDefaultWay] = useState<Way | null>(null);
  const [isOptimalSelected, setIsOptimalSelected] = useState(true);
  const [requestError, setRequestError] = useState<string | null>(null);
  const [getRoute, { isLoading }] = useLazyGetRouteQuery();

  const handleSubmit = useCallback(
    async (dto: Route) => {
      setRequestError(null);
      try {
        const data = await getRoute(dto).unwrap();
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

  return (
    <Stack direction="column" spacing={2}>
      <AddressesInputBlock handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {requestError && <Box role="alert">{requestError}</Box>}
      {optimalWay && defaultWay && (
        <>
          <OptimalWayBlock
            handleClick={() => {
              setIsOptimalSelected(true);
            }}
            wayData={optimalWay}
            selected={isOptimalSelected}
          />
          <DefaultWayBlock
            handleClick={() => {
              setIsOptimalSelected(false);
            }}
            wayData={defaultWay}
            selected={!isOptimalSelected}
          />
          {isOptimalSelected && optimalWay.startUrl && optimalWay.endUrl && (
            <Box className={styles.linkButtonBox}>
              <LinkButton href={optimalWay.startUrl}>
                <DirectionsWalkIcon />
                <ArrowRightAltIcon />
                <LocalTaxiIcon />
              </LinkButton>
              <LinkButton href={optimalWay.endUrl}>
                <LocalTaxiIcon />
                <ArrowRightAltIcon />
                <DirectionsWalkIcon />
              </LinkButton>
            </Box>
          )}
          <Button
            href={isOptimalSelected ? optimalWay.taxiUrl : defaultWay.taxiUrl}
            target="_blank"
            variant="contained"
            className={styles.taxiOrderButton}
          >
            {translate('mainPage.resultField.orderTaxi')}
          </Button>
        </>
      )}
    </Stack>
  );
}

export default WaySelector;
