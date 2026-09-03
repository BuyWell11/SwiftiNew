import styles from './Layout.module.scss';
import { useEffect, useState } from 'react';
import Sidebar from '@widgets/Sidebar';
import Topbar from '@widgets/Topbar';
import { useGetCitiesQuery } from '@shared/api/endpoints/catalogApi';
import { getErrorMessage } from '@shared/api/getErrorMessage';
import { useToast } from '@shared/hooks/useToast';
import Footer from '@widgets/Footer';
import { Outlet } from 'react-router-dom';
function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const { showToast } = useToast();
  const { error: citiesError } = useGetCitiesQuery();

  useEffect(() => {
    if (citiesError) {
      showToast(getErrorMessage(citiesError, 'Unable to load cities'), 'error');
    }
  }, [citiesError, showToast]);

  const handleMenuButtonClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={styles.layout}>
      <Topbar onMenuButtonClick={handleMenuButtonClick} onLogoClick={closeSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
