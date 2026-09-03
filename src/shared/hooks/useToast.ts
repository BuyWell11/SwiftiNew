import { createContext, useContext } from 'react';
import type { ToastVariant } from '@shared/ui/Toast';

export type ToastContextValue = {
  showToast: (message: string, variant?: ToastVariant) => void;
};

export const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}
