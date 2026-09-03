import styles from './Sidebar.module.scss';
import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import SidebarFooter from '@widgets/SidebarFooter';
import { translate } from '@shared/services/LocalizationService';
import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/config/routes';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ isOpen, onClose }: Props) {
  const handleMenuItemClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
    onClose();
  };
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose} variant="temporary" className={styles.sidebar}>
      <Toolbar />
      <List className={styles.list}>
        <ListItem className={styles.listItem}>
          <Link to={`${ROUTES.home}#about`} onClick={() => handleMenuItemClick('about')}>
            <ListItemText primary={translate('basement.menu.aboutUsPage')} />
          </Link>
        </ListItem>
        <ListItem className={styles.listItem}>
          <Link to={`${ROUTES.home}#tutorial`} onClick={() => handleMenuItemClick('tutorial')}>
            <ListItemText primary={translate('basement.menu.howItWorksPage')} />
          </Link>
        </ListItem>
        <ListItem className={styles.listItem}>
          <Link to={`${ROUTES.home}#contacts`} onClick={() => handleMenuItemClick('contacts')}>
            <ListItemText primary={translate('basement.menu.contacts')} />
          </Link>
        </ListItem>
      </List>
      <SidebarFooter className={styles.sidebarFoot} />
    </Drawer>
  );
}

export default Sidebar;
