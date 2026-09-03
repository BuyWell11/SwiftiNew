import styles from './DefaultWayBlock.module.scss';
import { Box, ButtonBase } from '@mui/material';
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
    <ButtonBase onClick={handleClick}>
      <Box className={selected ? styles.wayBlockSelected : styles.wayBlock}>
        <Box className={styles.priceBlock}>
          <span>{translate('mainPage.resultField.baseResult.title')}</span>
          <Box>
            <span>
              {translate('mainPage.resultField.otherUnits.from')}&nbsp;{wayData.price}&nbsp;
              {translate('mainPage.resultField.otherUnits.currency')}
            </span>
          </Box>
        </Box>
        <hr className={selected ? styles.wayBlockSeparatorSelected : styles.wayBlockSeparator} />
        <Box className={styles.travelTimeBlock}>
          <Box className={styles.timeBlock}>
            <LocalTaxiIcon />
            <span>
              {wayData.taxiTime} {translate('mainPage.resultField.otherUnits.time')}
            </span>
          </Box>
        </Box>
      </Box>
    </ButtonBase>
  );
}

export default DefaultWayBlock;
