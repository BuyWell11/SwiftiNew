import styles from './Toast.module.scss';

export type ToastVariant = 'info' | 'success' | 'error';

interface Props {
  message: string;
  variant: ToastVariant;
  onClose: () => void;
}

function Toast({ message, variant, onClose }: Props) {
  return (
    <button type="button" className={`${styles.toast} ${styles[variant]}`} onClick={onClose} aria-label="Close notification">
      {message}
    </button>
  );
}

export default Toast;
