import styles from './MainContentLogo.module.scss';
import { Box } from '@mui/material';
import LogoMainContent from '@shared/assets/LogoMainContent.svg';
import { translate } from '@shared/services/LocalizationService';

function MainContentLogo() {
  return (
    <Box className={styles.mainContentLogo}>
      <img src={LogoMainContent} alt="SVG Image" />
      <Box className={styles.mainContentLogoTextBox}>
        <span>{translate('mainPage.title')}</span>
        <span>{translate('mainPage.subtitle')}</span>
      </Box>
    </Box>
  );
}

export default MainContentLogo;
