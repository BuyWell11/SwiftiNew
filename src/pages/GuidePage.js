import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Toolbar } from "@mui/material";
import { translate } from "../services/LocalizationService";
import "../styles/pages/Page.css";
import "../styles/pages/GuidePage.css";
import "../styles/Fonts.css";
function GuidePage() {
    const data = [];
    for (let i = 0; i < 8; i++) {
        data.push(translate(`userGuidePage.content.part${i + 1}`));
    }
    return (_jsx(Box, { className: "page", children: _jsxs(Box, { className: "guide-page", children: [_jsx(Toolbar, {}), _jsx("span", { className: "h1", children: translate("userGuidePage.title") }), _jsx("span", { className: "caption", children: translate("userGuidePage.subtitle") }), _jsx("ol", { children: data.map((item, index) => (_jsx("li", { className: "body3", children: item }, index))) }), _jsx("span", { className: "body3-not-medium", children: translate("userGuidePage.lastWords") })] }) }));
}
export default GuidePage;
