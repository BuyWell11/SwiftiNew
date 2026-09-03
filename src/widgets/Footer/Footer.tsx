import styles from './Footer.module.scss';
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
    <div className={styles.footer}>
      <hr className={styles.separator} />
      <Link to={ROUTES.guide} onClick={scrollToTop}>
        {translate('basement.documents.userGuide')}
      </Link>
      <Link to={ROUTES.termOfUse} onClick={scrollToTop}>
        {translate('basement.documents.termOfUse')}
      </Link>
    </div>
  );
}

export default Footer;