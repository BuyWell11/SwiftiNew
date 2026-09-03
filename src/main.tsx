import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@app/App';
import { ErrorBoundary, RouterProvider, StoreProvider, ThemeProvider, ToastProvider } from '@app/providers';
import '@app/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <StoreProvider>
        <ThemeProvider>
          <RouterProvider>
            <ToastProvider>
              <App />
            </ToastProvider>
          </RouterProvider>
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
