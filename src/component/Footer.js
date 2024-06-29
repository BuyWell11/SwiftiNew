import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "@mui/material";
import "../styles/components/Footer.css";
import { Link } from "react-router-dom";
import { translate } from "../services/LocalizationService";
function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };
    return (_jsxs(Box, { className: "footer", children: [_jsx("hr", { className: "separator" }), _jsx(Link, { to: "guide", onClick: scrollToTop, children: translate("basement.documents.userGuide") }), _jsx(Link, { to: "term_of_use", onClick: scrollToTop, children: translate("basement.documents.termOfUse") })] }));
}
export default Footer;
