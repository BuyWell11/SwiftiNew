import styles from './LinkButton.module.scss';
import { Box, Button, ButtonProps } from '@mui/material';
import { ReactNode } from 'react';
interface Props extends ButtonProps {
  href: string;
  handleClick?: () => void;
  children?: ReactNode;
}

function LinkButton({ href, handleClick, children }: Props) {
  return (
    <Button href={href} target="_blank" onClick={handleClick} variant="outlined" className={styles.linkButton}>
      <Box className={styles.iconsBox}>{children}</Box>
    </Button>
  );
}

export default LinkButton;
