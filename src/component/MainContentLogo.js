import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "@mui/material";
import "../styles/components/MainContentLogo.css";
import LogoMainContent from "../img/LogoMainContent.svg";
import { translate } from "../services/LocalizationService";
function MainContentLogo() {
    return (_jsxs(Box, { className: "mainContentLogo", children: [_jsx("img", { src: LogoMainContent, alt: "SVG Image" }), _jsxs(Box, { className: "mainContentLogoTextBox", children: [_jsx("span", { children: translate("mainPage.title") }), _jsx("span", { children: translate("mainPage.subtitle") })] })] }));
}
export default MainContentLogo;
