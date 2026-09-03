import styles from './DefaultWayBlock.module.scss';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import { Way } from '@shared/types/Way';
import { translate } from '@shared/services/LocalizationService';

interface Props {
  selected: boolean;
  handleClick: () => void;
  wayData: Way;
}

function DefaultWayBlock({ selected, handleClick, wayData }: Props) {
  return (
    <button type="button" className={styles.wayBlockButton} onClick={handleClick}>
      <div className={selected ? styles.wayBlockSelected : styles.wayBlock}>
        <div className={styles.priceBlock}>
          <span>{translate('mainPage.resultField.baseResult.title')}</span>
          <div>
            <span>
              {translate('mainPage.resultField.otherUnits.from')}&nbsp;{wayData.price}&nbsp;
              {translate('mainPage.resultField.otherUnits.currency')}
            </span>
          </div>
        </div>
        <hr className={selected ? styles.wayBlockSeparatorSelected : styles.wayBlockSeparator} />
        <div className={styles.travelTimeBlock}>
          <div className={styles.timeBlock}>
            <LocalTaxiIcon />
            <span>
              {wayData.taxiTime} {translate('mainPage.resultField.otherUnits.time')}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}

export default DefaultWayBlock;
