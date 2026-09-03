import type { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

function RouterProvider({ children }: PropsWithChildren) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

export default RouterProvider;
