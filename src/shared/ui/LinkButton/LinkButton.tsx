import styles from './LinkButton.module.scss';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  handleClick?: () => void;
  children?: ReactNode;
}

function LinkButton({ href, handleClick, children, ...props }: Props) {
  return (
    <a href={href} target="_blank" rel="noreferrer" onClick={handleClick} className={styles.linkButton} {...props}>
      <span className={styles.iconsBox}>{children}</span>
    </a>
  );
}

export default LinkButton;
