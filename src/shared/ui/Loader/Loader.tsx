import styles from './Loader.module.scss';
import { Box } from '@mui/material';

function Loader() {
  return (
    <Box className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </Box>
  );
}

export default Loader;
