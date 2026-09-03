import { useCallback, useEffect, useMemo, useRef, useState, type PropsWithChildren } from 'react';
import Toast, { type ToastVariant } from '@shared/ui/Toast';
import { ToastContext } from '@shared/hooks/useToast';
import styles from './ToastProvider.module.scss';

type ToastItem = {
  id: number;
  message: string;
  variant: ToastVariant;
};

function ToastProvider({ children }: PropsWithChildren) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const nextId = useRef(0);
  const timers = useRef(new Map<number, number>());
  const messageIds = useRef(new Map<string, number>());

  const closeToast = useCallback((id: number) => {
    setToasts((currentToasts) => {
      const toast = currentToasts.find((item) => item.id === id);
      if (toast) messageIds.current.delete(`${toast.variant}:${toast.message}`);
      return currentToasts.filter((item) => item.id !== id);
    });
    const timer = timers.current.get(id);
    if (timer !== undefined) window.clearTimeout(timer);
    timers.current.delete(id);
  }, []);

  const showToast = useCallback(
    (message: string, variant: ToastVariant = 'info') => {
      const key = `${variant}:${message}`;
      if (messageIds.current.has(key)) return;
      const id = nextId.current++;
      messageIds.current.set(key, id);
      setToasts((currentToasts) => [...currentToasts, { id, message, variant }]);
      timers.current.set(
        id,
        window.setTimeout(() => closeToast(id), 10000),
      );
    },
    [closeToast],
  );

  useEffect(
    () => () => {
      timers.current.forEach((timer) => window.clearTimeout(timer));
      timers.current.clear();
      messageIds.current.clear();
    },
    [],
  );

  const contextValue = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className={styles.container} aria-live="polite">
        {toasts.map((toast) => (
          <Toast key={toast.id} message={toast.message} variant={toast.variant} onClose={() => closeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export default ToastProvider;
