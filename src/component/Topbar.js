import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../img/Logo.svg";
import "../styles/components/Topbar.css";
import { Link } from "react-router-dom";
function Topbar({ onMenuButtonClick, isSidebarOpen }) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавная прокрутка
        });
    };
    return (_jsx(AppBar, { position: "fixed", className: "noShadow", sx: { zIndex: (theme) => theme.zIndex.drawer + 1 }, children: _jsxs(Toolbar, { className: "topBar", children: [_jsx(Link, { to: "/", onClick: scrollToTop, children: _jsx("img", { src: Logo, alt: "Logo", className: "logo" }) }), _jsx(IconButton, { edge: "start", color: "inherit", "aria-label": "menu", onClick: () => onMenuButtonClick(), children: isSidebarOpen ? (_jsx(CloseIcon, { className: "topBarBtn" })) : (_jsx(MenuIcon, { className: "topBarBtn" })) })] }) }));
}
export default Topbar;
