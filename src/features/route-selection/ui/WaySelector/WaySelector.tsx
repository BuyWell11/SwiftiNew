import styles from './WaySelector.module.scss';
import OptimalWayBlock from '@features/route-selection/ui/OptimalWayBlock';
import DefaultWayBlock from '@features/route-selection/ui/DefaultWayBlock';
import AddressesInputBlock from '@features/route-selection/ui/AddressesInputBlock';
import Loader from '@shared/ui/Loader';
import { translate } from '@shared/services/LocalizationService';
import { useRouteSelection } from '../../lib/useRouteSelection';
import TaxiRouteLinks from '@features/route-selection/ui/TaxiRouteLinks';
import TaxiOrderButton from '@features/route-selection/ui/TaxiOrderButton';

function WaySelector() {
  const { optimalWay, defaultWay, isOptimalSelected, isLoading, requestError, handleSubmit, selectOptimal, selectDefault } =
    useRouteSelection();

  return (
    <div className={styles.waySelector}>
      <AddressesInputBlock handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {requestError && <div role="alert">{requestError}</div>}
      {optimalWay && defaultWay && (
        <>
          <OptimalWayBlock handleClick={selectOptimal} wayData={optimalWay} selected={isOptimalSelected} />
          <DefaultWayBlock handleClick={selectDefault} wayData={defaultWay} selected={!isOptimalSelected} />
          {isOptimalSelected && optimalWay.startUrl && optimalWay.endUrl && (
            <TaxiRouteLinks startUrl={optimalWay.startUrl} endUrl={optimalWay.endUrl} />
          )}
          <TaxiOrderButton
            href={isOptimalSelected ? optimalWay.taxiUrl : defaultWay.taxiUrl}
            label={translate('mainPage.resultField.orderTaxi')}
          />
        </>
      )}
    </div>
  );
}

export default WaySelector;
