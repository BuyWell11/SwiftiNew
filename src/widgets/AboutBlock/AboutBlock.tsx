import styles from './AboutBlock.module.scss';
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
    <div className={styles.aboutBlock} id="about">
      <TopicText>{translate('mainPage.aboutUs.title')}</TopicText>
      <div className={styles.aboutBlockContent}>
        <div className={styles.paragraph}>
          <span>{translate('mainPage.aboutUs.content.firstParagraf')}</span>
        </div>
        <div className={styles.paragraphIndented}>
          <span>{translate('mainPage.aboutUs.content.secondParagraf')}</span>
        </div>
      </div>
      <div className={styles.aboutBlockContentAdvantages}>
        <div className={styles.advantagesTitle}>
          <span>{translate('mainPage.aboutUs.advantages.title')}</span>
        </div>
        <AdvantagesCarousel data={advantages} />
      </div>
    </div>
  );
}

export default AboutBlock;
