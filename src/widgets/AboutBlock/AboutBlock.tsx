import styles from './AboutBlock.module.scss';
import { Box } from '@mui/material';
import TopicText from '@shared/ui/TopicText';
import { translate } from '@shared/services/LocalizationService';
import AdvantagesCarousel from '@widgets/AdvantagesCarousel';

function AboutBlock() {
  const advantages: { label: string; value: string }[] = [];

  advantages.push({
    label: translate('mainPage.aboutUs.advantages.economy.title'),
    value: translate('mainPage.aboutUs.advantages.economy.content'),
  });
  advantages.push({
    label: translate('mainPage.aboutUs.advantages.ecoFriendliness.title'),
    value: translate('mainPage.aboutUs.advantages.ecoFriendliness.content'),
  });
  advantages.push({
    label: translate('mainPage.aboutUs.advantages.activity.title'),
    value: translate('mainPage.aboutUs.advantages.activity.content'),
  });

  return (
    <Box className={styles.aboutBlock} id="about">
      <TopicText>{translate('mainPage.aboutUs.title')}</TopicText>
      <Box className={styles.aboutBlockContent}>
        <Box className={styles.paragraph}>
          <span>{translate('mainPage.aboutUs.content.firstParagraf')}</span>
        </Box>
        <Box className={styles.paragraphIndented}>
          <span>{translate('mainPage.aboutUs.content.secondParagraf')}</span>
        </Box>
      </Box>
      <Box className={styles.aboutBlockContentAdvantages}>
        <Box className={styles.advantagesTitle}>
          <span>{translate('mainPage.aboutUs.advantages.title')}</span>
        </Box>
        <AdvantagesCarousel data={advantages} />
      </Box>
    </Box>
  );
}

export default AboutBlock;
