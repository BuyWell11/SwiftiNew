import styles from './GuidePage.module.scss';
import { Box, Toolbar } from '@mui/material';
import { translate } from '@shared/services/LocalizationService';
function GuidePage() {
  const data: string[] = [];
  for (let i = 0; i < 8; i++) {
    data.push(translate(`userGuidePage.content.part${i + 1}`));
  }

  return (
    <Box className={styles.page}>
      <Box className={styles.guidePage}>
        <Toolbar />
        <span className={styles.title}>{translate('userGuidePage.title')}</span>
        <span className={styles.caption}>{translate('userGuidePage.subtitle')}</span>
        <ol>
          {data.map((item, index) => (
            <li className={styles.body} key={index}>
              {item}
            </li>
          ))}
        </ol>
        <span className={styles.bodyRegular}>{translate('userGuidePage.lastWords')}</span>
      </Box>
    </Box>
  );
}

export default GuidePage;
