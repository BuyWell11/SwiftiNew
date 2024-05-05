import {Box, ButtonBase} from "@mui/material";
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import {Way} from "../models/Way";
import {translate} from "../services/LocalizationService";

interface Props {
    selected: boolean;
    handleClick: () => void;
    wayData: Way;
}

function DefaultWayBlock({selected, handleClick, wayData}: Props) {

    return (
        <ButtonBase onClick={handleClick}>
            <Box className={selected ? "wayBlockSelected" : "wayBlock"}>
                <Box className="priceBlock">
                    <span>{translate("mainPage.resultField.baseResult.title")}</span>
                    <Box>
                        <span>{translate("mainPage.resultField.otherUnits.from")}&nbsp;{wayData.price}&nbsp;{translate("mainPage.resultField.otherUnits.currency")}</span>
                    </Box>
                </Box>
                <hr className={selected ? "wayBlockSeparatorSelected" : "wayBlockSeparator"}/>
                <Box className="travelTimeBlock">
                    <Box className="timeBlock">
                        <LocalTaxiIcon/>
                        <span>{wayData.taxiTime} {translate("mainPage.resultField.otherUnits.time")}</span>
                    </Box>
                </Box>
            </Box>
        </ButtonBase>
    )
}

export default DefaultWayBlock;
