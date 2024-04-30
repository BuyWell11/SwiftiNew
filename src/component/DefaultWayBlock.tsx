import {Box, ButtonBase} from "@mui/material";
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import {Way} from "../models/Way";

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
                    <span>Базовый</span>
                    <Box>
                        <span>От&nbsp;{wayData.price}&nbsp;р</span>
                    </Box>
                </Box>
                <hr className={selected ? "wayBlockSeparatorSelected" : "wayBlockSeparator"}/>
                <Box className="travelTimeBlock">
                    <Box className="timeBlock">
                        <LocalTaxiIcon/>
                        <span>{Math.round(wayData.taxiTime / 60)} мин</span>
                    </Box>
                </Box>
            </Box>
        </ButtonBase>
    )
}

export default DefaultWayBlock;
