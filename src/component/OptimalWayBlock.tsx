import {Box, ButtonBase} from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import '../styles/WayBlock.css'
import {Way} from "../models/Way";
import {translate} from "../services/LocalizationService";

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
                        <span>{translate("mainPage.resultField.optimalResult.title")}</span>
                    </Box>
                    <Box>
                        <span>{translate("mainPage.resultField.otherUnits.from")}&nbsp;{wayData.price}&nbsp;{translate("mainPage.resultField.otherUnits.currency")}`</span>
                    </Box>
                </Box>
                <hr className={selected ? "wayBlockSeparatorSelected" : "wayBlockSeparator"}/>
                <Box className="travelTimeBlock">
                    <Box className="timeBlock">
                        <DirectionsWalkIcon/>
                        <span>{wayData.walkingAtStartTime} {translate("mainPage.resultField.otherUnits.time")}</span>
                    </Box>
                    <ArrowRightAltIcon/>
                    <Box className="timeBlock">
                        <LocalTaxiIcon/>
                        <span>{wayData.taxiTime} {translate("mainPage.resultField.otherUnits.time")}</span>
                    </Box>
                    <ArrowRightAltIcon/>
                    <Box className="timeBlock">
                        <DirectionsWalkIcon/>
                        <span>{wayData.walkingAtEndTime} {translate("mainPage.resultField.otherUnits.time")}</span>
                    </Box>
                </Box>
            </Box>
        </ButtonBase>
    )
}

export default OptimalWayBlock;