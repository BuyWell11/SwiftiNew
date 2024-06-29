import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import "../styles/components/Sidebar.css";
import SidebarFooter from "./SidebarFooter.js";
import { translate } from "../services/LocalizationService.js";
import { Link } from "react-router-dom";
function Sidebar({ isOpen, onClose }) {
    const handleMenuItemClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
        onClose();
    };
    return (_jsxs(Drawer, { anchor: "right", open: isOpen, onClose: () => onClose(), variant: "persistent", className: "sidebar", children: [_jsx(Toolbar, {}), _jsxs(List, { children: [_jsx(ListItem, { children: _jsx(Link, { to: "/#about", onClick: () => handleMenuItemClick("about"), children: _jsx(ListItemText, { primary: translate('basement.menu.aboutUsPage') }) }) }), _jsx(ListItem, { children: _jsx(Link, { to: "/#tutorial", onClick: () => handleMenuItemClick("tutorial"), children: _jsx(ListItemText, { primary: translate('basement.menu.howItWorksPage') }) }) }), _jsx(ListItem, { children: _jsx(Link, { to: "/#contacts", onClick: () => handleMenuItemClick("contacts"), children: _jsx(ListItemText, { primary: translate('basement.menu.contacts') }) }) })] }), _jsx(SidebarFooter, { className: "sidebarFoot" })] }));
}
export default Sidebar;
