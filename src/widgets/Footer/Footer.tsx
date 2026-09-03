import styles from './Footer.module.scss';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { translate } from '@shared/services/LocalizationService';
import { ROUTES } from '@shared/config/routes';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Box className={styles.footer}>
      <hr className={styles.separator} />
      <Link to={ROUTES.guide} onClick={scrollToTop}>
        {translate('basement.documents.userGuide')}
      </Link>
      <Link to={ROUTES.termOfUse} onClick={scrollToTop}>
        {translate('basement.documents.termOfUse')}
      </Link>
    </Box>
  );
}

export default Footer;