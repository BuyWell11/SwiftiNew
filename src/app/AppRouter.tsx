import { lazy, Suspense, type ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '@pages/Layout';
import PageLoader from '@shared/ui/PageLoader';
import { ROUTES } from '@shared/config/routes';

const GuidePage = lazy(() => import('@pages/GuidePage'));
const MainPage = lazy(() => import('@pages/MainPage'));
const TermOfUsePage = lazy(() => import('@pages/TermOfUsePage'));

const withPageLoader = (page: ReactNode) => <Suspense fallback={<PageLoader />}>{page}</Suspense>;

export function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.home} element={withPageLoader(<MainPage />)} />
        <Route path={ROUTES.guide} element={withPageLoader(<GuidePage />)} />
        <Route path={ROUTES.termOfUse} element={withPageLoader(<TermOfUsePage />)} />
      </Route>
      <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
    </Routes>
  );
}

export default AppRouter;
