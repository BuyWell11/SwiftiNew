import Loader from '@shared/ui/Loader';
import styles from './PageLoader.module.scss';

function PageLoader() {
  return (
    <div className={styles.pageLoader}>
      <Loader />
    </div>
  );
}

export default PageLoader;
