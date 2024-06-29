import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, ButtonBase } from "@mui/material";
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import { translate } from "../services/LocalizationService";
function DefaultWayBlock({ selected, handleClick, wayData }) {
    return (_jsx(ButtonBase, { onClick: handleClick, children: _jsxs(Box, { className: selected ? "wayBlockSelected" : "wayBlock", children: [_jsxs(Box, { className: "priceBlock", children: [_jsx("span", { children: translate("mainPage.resultField.baseResult.title") }), _jsx(Box, { children: _jsxs("span", { children: [translate("mainPage.resultField.otherUnits.from"), "\u00A0", wayData.price, "\u00A0", translate("mainPage.resultField.otherUnits.currency")] }) })] }), _jsx("hr", { className: selected ? "wayBlockSeparatorSelected" : "wayBlockSeparator" }), _jsx(Box, { className: "travelTimeBlock", children: _jsxs(Box, { className: "timeBlock", children: [_jsx(LocalTaxiIcon, {}), _jsxs("span", { children: [wayData.taxiTime, " ", translate("mainPage.resultField.otherUnits.time")] })] }) })] }) }));
}
export default DefaultWayBlock;
