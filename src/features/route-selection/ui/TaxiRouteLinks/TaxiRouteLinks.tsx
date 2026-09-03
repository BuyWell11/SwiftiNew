import LinkButton from '@shared/ui/LinkButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import styles from './TaxiRouteLinks.module.scss';

interface Props {
  startUrl: string;
  endUrl: string;
}

function TaxiRouteLinks({ startUrl, endUrl }: Props) {
  return (
    <div className={styles.links}>
      <LinkButton href={startUrl}>
        <DirectionsWalkIcon />
        <ArrowRightAltIcon />
        <LocalTaxiIcon />
      </LinkButton>
      <LinkButton href={endUrl}>
        <LocalTaxiIcon />
        <ArrowRightAltIcon />
        <DirectionsWalkIcon />
      </LinkButton>
    </div>
  );
}

export default TaxiRouteLinks;
