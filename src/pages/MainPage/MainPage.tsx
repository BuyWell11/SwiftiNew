import styles from './MainPage.module.scss';
import { Toolbar } from '@mui/material';
import MainContentLogo from '@widgets/MainContentLogo';
import { WaySelector } from '@features/route-selection';
import AboutBlock from '@widgets/AboutBlock';
import ContactsBlock from '@widgets/ContactsBlock';
import TutorialBlock from '@widgets/TutorialBlock';

function MainPage() {
  return (
    <div className={styles.page}>
      <Toolbar />
      <MainContentLogo />
      <WaySelector />
      <AboutBlock />
      <TutorialBlock />
      <ContactsBlock />
    </div>
  );
}

export default MainPage;
