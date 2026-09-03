import styles from './TaxiOrderButton.module.scss';

interface Props {
  href: string;
  label: string;
}

function TaxiOrderButton({ href, label }: Props) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.button}>
      {label}
    </a>
  );
}

export default TaxiOrderButton;
