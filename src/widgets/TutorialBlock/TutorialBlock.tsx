import styles from './TutorialBlock.module.scss';
import TopicText from '@shared/ui/TopicText';
import { translate } from '@shared/services/LocalizationService';
import { Box } from '@mui/material';
import tutorial from '@shared/assets/tutorial.webm';
import LazyVideo from '@shared/ui/LazyVideo';
function TutorialBlock() {
  return (
    <Box className={styles.tutorialBlock} id="tutorial">
      <TopicText>{translate('mainPage.howItWorks.title')}</TopicText>
      <Box className={styles.tutorialBlockContent}>
        <LazyVideo src={tutorial} type="video/webm" />
      </Box>
    </Box>
  );
}

export default TutorialBlock;
