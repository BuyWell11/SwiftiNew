import {Box, Slider} from "@mui/material";
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import "./CustomSlider.css"

export default function CustomSlider() {
  const marks = [
    {
      value: 0,
    },
    {
      value: 5,
    },
    {
      value: 10,
    }
  ]
  return (
    <Box className="customSlider">
      <DirectionsWalkIcon className="walkIcon"/>
      <Slider
        defaultValue={0}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        max={10}
        color="primary"
      />
    </Box>
  )
}