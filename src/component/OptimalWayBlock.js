import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, ButtonBase } from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import '../styles/components/WayBlock.css';
import { translate } from "../services/LocalizationService";
function OptimalWayBlock({ selected, handleClick, wayData }) {
    return (_jsx(ButtonBase, { onClick: handleClick, children: _jsxs(Box, { className: selected ? "wayBlockSelected" : "wayBlock", children: [_jsxs(Box, { className: "priceBlock", children: [_jsxs(Box, { children: [_jsx(ThumbUpOffAltIcon, { sx: { color: "#03AD52" } }), _jsx("span", { children: translate("mainPage.resultField.optimalResult.title") })] }), _jsx(Box, { children: _jsxs("span", { children: [translate("mainPage.resultField.otherUnits.from"), "\u00A0", wayData.price, "\u00A0", translate("mainPage.resultField.otherUnits.currency"), "`"] }) })] }), _jsx("hr", { className: selected ? "wayBlockSeparatorSelected" : "wayBlockSeparator" }), _jsxs(Box, { className: "travelTimeBlock", children: [_jsxs(Box, { className: "timeBlock", children: [_jsx(DirectionsWalkIcon, {}), _jsxs("span", { children: [wayData.walkingAtStartTime, " ", translate("mainPage.resultField.otherUnits.time")] })] }), _jsx(ArrowRightAltIcon, {}), _jsxs(Box, { className: "timeBlock", children: [_jsx(LocalTaxiIcon, {}), _jsxs("span", { children: [wayData.taxiTime, " ", translate("mainPage.resultField.otherUnits.time")] })] }), _jsx(ArrowRightAltIcon, {}), _jsxs(Box, { className: "timeBlock", children: [_jsx(DirectionsWalkIcon, {}), _jsxs("span", { children: [wayData.walkingAtEndTime, " ", translate("mainPage.resultField.otherUnits.time")] })] })] })] }) }));
}
export default OptimalWayBlock;
