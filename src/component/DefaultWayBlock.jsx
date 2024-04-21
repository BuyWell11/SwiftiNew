import PropTypes from "prop-types";
import {Box, ButtonBase} from "@mui/material";
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';


function DefaultWayBlock({selected, handleClick, wayData}) {

  return (
    <ButtonBase onClick={handleClick}>
      <Box className={selected ? "wayBlockSelected" : "wayBlock"}>
        <Box className="priceBlock">
          <span>Базовый</span>
          <Box>
            <span>От&nbsp;{wayData.price}&nbsp;р</span>
          </Box>
        </Box>
        <hr className={selected ? "wayBlockSeparatorSelected" : "wayBlockSeparator"}/>
        <Box className="travelTimeBlock">
          <Box className="timeBlock">
            <LocalTaxiIcon/>
            <span>{Math.round(wayData.time / 60)} мин</span>
          </Box>
        </Box>
      </Box>
    </ButtonBase>
  )
}

export default DefaultWayBlock;

DefaultWayBlock.propTypes = {
  selected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  wayData: PropTypes.object.isRequired
}