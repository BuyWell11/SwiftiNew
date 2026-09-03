import type { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

function RouterProvider({ children }: PropsWithChildren) {
  const basename = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '');

  return <BrowserRouter basename={basename}>{children}</BrowserRouter>;
}

export default RouterProvider;
