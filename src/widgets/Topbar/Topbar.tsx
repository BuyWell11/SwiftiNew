import styles from './Topbar.module.scss';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '@shared/assets/Logo.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/config/routes';

interface Props {
  onMenuButtonClick: () => void;
  onLogoClick: () => void;
  isSidebarOpen: boolean;
}

function Topbar({ onMenuButtonClick, onLogoClick, isSidebarOpen }: Props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Плавная прокрутка
    });
  };

  return (
    <AppBar position="fixed" className={styles.noShadow} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar className={styles.topBar}>
        <Link
          to={ROUTES.home}
          onClick={() => {
            scrollToTop();
            onLogoClick();
          }}
        >
          <img src={Logo} alt="Logo" className={styles.logo} />
        </Link>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => onMenuButtonClick()}>
          {isSidebarOpen ? <CloseIcon className={styles.topBarBtn} /> : <MenuIcon className={styles.topBarBtn} />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
