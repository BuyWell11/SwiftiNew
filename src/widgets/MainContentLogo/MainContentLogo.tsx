import styles from './MainContentLogo.module.scss';
import LogoMainContent from '@shared/assets/LogoMainContent.svg';
import { translate } from '@shared/services/LocalizationService';

function MainContentLogo() {
  return (
    <div className={styles.mainContentLogo}>
      <img src={LogoMainContent} alt="SVG Image" />
      <div className={styles.mainContentLogoTextBox}>
        <span>{translate('mainPage.title')}</span>
        <span>{translate('mainPage.subtitle')}</span>
      </div>
    </div>
  );
}

export default MainContentLogo;
