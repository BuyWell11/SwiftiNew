import { Slider } from '@mui/material';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HtmlTooltip from '@shared/ui/HtmlTooltip';
import styles from './AddressesInputBlock.module.scss';

interface Props {
  value: number;
  tooltip: string;
  onChange: (value: number) => void;
}

function WalkingTimeSlider({ value, tooltip, onChange }: Props) {
  return (
    <div className={styles.customSlider}>
      <DirectionsWalkIcon sx={{ color: '#2D2D2D' }} />
      <Slider
        name="time"
        value={value}
        step={null}
        valueLabelDisplay="auto"
        marks={[{ value: 0 }, { value: 5 }, { value: 10 }]}
        max={10}
        onChange={(_event, nextValue) => {
          if (typeof nextValue === 'number') onChange(nextValue);
        }}
        color="primary"
      />
      <HtmlTooltip title={<span>{tooltip}</span>}>
        <HelpOutlineIcon className={styles.sliderIcon} sx={{ color: '#8D6EC8' }} />
      </HtmlTooltip>
    </div>
  );
}

export default WalkingTimeSlider;
