import styles from './TutorialBlock.module.scss';
import TopicText from '@shared/ui/TopicText';
import { translate } from '@shared/services/LocalizationService';
import tutorial from '@shared/assets/tutorial.webm';
import LazyVideo from '@shared/ui/LazyVideo';
function TutorialBlock() {
  return (
    <div className={styles.tutorialBlock} id="tutorial">
      <TopicText>{translate('mainPage.howItWorks.title')}</TopicText>
      <div className={styles.tutorialBlockContent}>
        <LazyVideo src={tutorial} type="video/webm" />
      </div>
    </div>
  );
}

export default TutorialBlock;
