import styles from './OptimalWayBlock.module.scss';
import { Box, ButtonBase } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import { Way } from '@shared/types/Way';
import { translate } from '@shared/services/LocalizationService';

interface Props {
  selected: boolean;
  handleClick: () => void;
  wayData: Way;
}

function OptimalWayBlock({ selected, handleClick, wayData }: Props) {
  return (
    <ButtonBase onClick={handleClick}>
      <Box className={selected ? styles.wayBlockSelected : styles.wayBlock}>
        <Box className={styles.priceBlock}>
          <Box>
            <ThumbUpOffAltIcon sx={{ color: '#03AD52' }} />
            <span>{translate('mainPage.resultField.optimalResult.title')}</span>
          </Box>
          <Box>
            <span>
              {translate('mainPage.resultField.otherUnits.from')}&nbsp;{wayData.price}&nbsp;
              {translate('mainPage.resultField.otherUnits.currency')}`
            </span>
          </Box>
        </Box>
        <hr className={selected ? styles.wayBlockSeparatorSelected : styles.wayBlockSeparator} />
        <Box className={styles.travelTimeBlock}>
          <Box className={styles.timeBlock}>
            <DirectionsWalkIcon />
            <span>
              {wayData.walkingAtStartTime} {translate('mainPage.resultField.otherUnits.time')}
            </span>
          </Box>
          <ArrowRightAltIcon />
          <Box className={styles.timeBlock}>
            <LocalTaxiIcon />
            <span>
              {wayData.taxiTime} {translate('mainPage.resultField.otherUnits.time')}
            </span>
          </Box>
          <ArrowRightAltIcon />
          <Box className={styles.timeBlock}>
            <DirectionsWalkIcon />
            <span>
              {wayData.walkingAtEndTime} {translate('mainPage.resultField.otherUnits.time')}
            </span>
          </Box>
        </Box>
      </Box>
    </ButtonBase>
  );
}

export default OptimalWayBlock;
