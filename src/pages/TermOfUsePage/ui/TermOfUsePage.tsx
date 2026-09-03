import styles from './TermOfUsePage.module.scss';
import { translate } from '@shared/services/LocalizationService';
import { Toolbar } from '@mui/material';
import { getTermOfUseContent } from '../lib/getTermOfUseContent';
import TermOfUseSection from './TermOfUseSection';
function TermOfUsePage() {
  const sections = getTermOfUseContent();

  return (
    <div className={styles.page}>
      <div className={styles.termOfUsePage}>
        <Toolbar />
        <span className={styles.title}>{translate('termOfUsePage.title')}</span>
        <span className={styles.caption}>{translate('termOfUsePage.subtitle')}</span>
        <div className={styles.section}>
          <span className={styles.body}>{translate('termOfUsePage.disclaimer.part1')}</span>
          <span className={styles.body}>{translate('termOfUsePage.disclaimer.part2')}</span>
        </div>
        {sections.map((section, index) => (
          <TermOfUseSection key={section.title} number={index + 1} title={section.title} paragraphs={section.paragraphs} />
        ))}
        <span className={styles.bodyRegular}>{translate('termOfUsePage.publicationDate')}</span>
        <span className={styles.bodyRegular}>{translate('termOfUsePage.effectiveDate')}</span>
      </div>
    </div>
  );
}

export default TermOfUsePage;
