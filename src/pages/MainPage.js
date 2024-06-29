import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Toolbar } from "@mui/material";
import "../styles/pages/Page.css";
import MainContentLogo from "../component/MainContentLogo";
import WaySelector from "../component/WaySelector";
import AboutBlock from "../component/AboutBlock";
import ContactsBlock from "../component/ContactsBlock";
import TutorialBlock from "../component/TutorialBlock";
function MainPage() {
    return (_jsxs(Box, { className: "page", children: [_jsx(Toolbar, {}), _jsx(MainContentLogo, {}), _jsx(WaySelector, {}), _jsx(AboutBlock, {}), _jsx(TutorialBlock, {}), _jsx(ContactsBlock, {})] }));
}
export default MainPage;
