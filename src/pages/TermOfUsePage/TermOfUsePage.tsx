import styles from './TermOfUsePage.module.scss';
import { Box, Toolbar } from '@mui/material';
import { translate } from '@shared/services/LocalizationService';
function TermOfUsePage() {
  const generalProvisions: string[] = [];
  for (let i = 0; i < 7; i++) {
    generalProvisions.push(translate(`termOfUsePage.content.generalProvisions.content.part${i + 1}`));
  }

  const serviceUsage: string[] = [];
  for (let i = 0; i < 6; i++) {
    serviceUsage.push(translate(`termOfUsePage.content.serviceUsage.content.part${i + 1}`));
  }

  const otherProvision: string[] = [];
  for (let i = 0; i < 4; i++) {
    otherProvision.push(translate(`termOfUsePage.content.otherProvision.content.part${i + 1}`));
  }

  const copyrightInfo: string[] = [];
  for (let i = 0; i < 1; i++) {
    copyrightInfo.push(translate(`termOfUsePage.content.copyrightInfo.content.part${i + 1}`));
  }

  return (
    <Box className={styles.page}>
      <Box className={styles.termOfUsePage}>
        <Toolbar />
        <span className={styles.title}>{translate('termOfUsePage.title')}</span>
        <span className={styles.caption}>{translate('termOfUsePage.subtitle')}</span>
        <Box className={styles.section}>
          <span className={styles.body}>{translate('termOfUsePage.disclaimer.part1')}</span>
          <span className={styles.body}>{translate('termOfUsePage.disclaimer.part2')}</span>
        </Box>
        <Box className={styles.section}>
          <span className={styles.sectionTitle}>1. {translate('termOfUsePage.content.generalProvisions.title')}</span>
          <ol>
            {generalProvisions.map((item, index) => (
              <li className={styles.body} key={index}>
                {item}
              </li>
            ))}
          </ol>
        </Box>
        <Box className={styles.section}>
          <span className={styles.sectionTitle}>2. {translate('termOfUsePage.content.serviceUsage.title')}</span>
          <ol>
            {serviceUsage.map((item, index) => (
              <li className={styles.body} key={index}>
                {item}
              </li>
            ))}
          </ol>
        </Box>
        <Box className={styles.section}>
          <span className={styles.sectionTitle}>3. {translate('termOfUsePage.content.otherProvision.title')}</span>
          <ol>
            {otherProvision.map((item, index) => (
              <li className={styles.body} key={index}>
                {item}
              </li>
            ))}
          </ol>
        </Box>
        <Box className={styles.section}>
          <span className={styles.sectionTitle}>4. {translate('termOfUsePage.content.copyrightInfo.title')}</span>
          <ol>
            {copyrightInfo.map((item, index) => (
              <li className={styles.body} key={index}>
                {item}
              </li>
            ))}
          </ol>
        </Box>
        <span className={styles.bodyRegular}>{translate('termOfUsePage.publicationDate')}</span>
        <span className={styles.bodyRegular}>{translate('termOfUsePage.effectiveDate')}</span>
      </Box>
    </Box>
  );
}

export default TermOfUsePage;
