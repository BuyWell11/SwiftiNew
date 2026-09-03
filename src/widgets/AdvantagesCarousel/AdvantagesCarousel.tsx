import styles from './AdvantagesCarousel.module.scss';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
interface Props {
  data: { label: string; value: string }[];
}

function AdvantagesCarousel({ data }: Props) {
  return (
    <Carousel
      indicators={false}
      animation="slide"
      autoPlay={true}
      interval={5000}
      swipe={true}
      navButtonsAlwaysVisible={false}
      cycleNavigation={true}
    >
      {data.map((item, index) => (
        <Box key={index} className={styles.advantagesCarouselCard}>
          <Typography variant="h5" component="div">
            {item.label}
          </Typography>
          <Typography variant="body1" component="div">
            {item.value}
          </Typography>
        </Box>
      ))}
    </Carousel>
  );
}

export default AdvantagesCarousel;
