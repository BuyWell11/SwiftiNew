import styles from './MainPage.module.scss';
import { Box, Toolbar } from '@mui/material';
import MainContentLogo from '@widgets/MainContentLogo';
import WaySelector from '@features/route-selection/WaySelector';
import AboutBlock from '@widgets/AboutBlock';
import ContactsBlock from '@widgets/ContactsBlock';
import TutorialBlock from '@widgets/TutorialBlock';

function MainPage() {
  return (
    <Box className={styles.page}>
      <Toolbar />
      <MainContentLogo />
      <WaySelector />
      <AboutBlock />
      <TutorialBlock />
      <ContactsBlock />
    </Box>
  );
}

export default MainPage;
