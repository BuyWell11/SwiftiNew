import {Box, ButtonBase} from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import './WayBlock.css'
import {Way} from "../models/Way";

interface Props {
    selected: boolean;
    handleClick: () => void;
    wayData: Way;
}

function OptimalWayBlock({selected, handleClick, wayData}: Props) {
    return (
        <ButtonBase onClick={handleClick}>
            <Box className={selected ? "wayBlockSelected" : "wayBlock"}>
                <Box className="priceBlock">
                    <Box>
                        <ThumbUpOffAltIcon sx={{color: "#03AD52"}}/>
                        <span>Оптимальный</span>
                    </Box>
                    <Box>
                        <span>От&nbsp;{wayData.price}&nbsp;р</span>
                    </Box>
                </Box>
                <hr className={selected ? "wayBlockSeparatorSelected" : "wayBlockSeparator"}/>
                <Box className="travelTimeBlock">
                    {wayData.walkingAtStartTime && (
                        <Box className="timeBlock">
                            <DirectionsWalkIcon/>
                            <span>{Math.round(wayData.walkingAtStartTime / 60)} мин</span>
                        </Box>
                    )}
                    <ArrowRightAltIcon/>
                    <Box className="timeBlock">
                        <LocalTaxiIcon/>
                        <span>{Math.round(wayData.taxiTime / 60)} мин</span>
                    </Box>
                    <ArrowRightAltIcon/>
                    {wayData.walkingAtEndTime && (
                        <Box className="timeBlock">
                            <DirectionsWalkIcon/>
                            <span>{Math.round(wayData.walkingAtEndTime / 60)} мин</span>
                        </Box>
                    )}
                </Box>
            </Box>
        </ButtonBase>
    )
}

export default OptimalWayBlock;