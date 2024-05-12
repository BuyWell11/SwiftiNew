import {AppBar, Toolbar, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../img/Logo.svg";
import "../styles/Topbar.css";

interface Props {
    onMenuButtonClick: Function;
    isSidebarOpen: boolean;
}

function Topbar({onMenuButtonClick, isSidebarOpen}: Props) {
    return (
        <AppBar
            position="fixed"
            className="noShadow"
            sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}
        >
            <Toolbar className="topBar">
                <img src={Logo} alt="Logo" className="logo"/>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => onMenuButtonClick()}
                >
                    {isSidebarOpen ? (
                        <CloseIcon className="topBarBtn"/>
                    ) : (
                        <MenuIcon className="topBarBtn"/>
                    )}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Topbar;
