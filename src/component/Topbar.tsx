import {AppBar, Toolbar, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../img/Logo.svg";
import "../styles/components/Topbar.css";
import {Link} from "react-router-dom";

interface Props {
    onMenuButtonClick: Function;
    isSidebarOpen: boolean;
}

function Topbar({onMenuButtonClick, isSidebarOpen}: Props) {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавная прокрутка
        });
    };

    return (
        <AppBar
            position="fixed"
            className="noShadow"
            sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}
        >
            <Toolbar className="topBar">
                <Link to="/" onClick={scrollToTop}><img src={Logo} alt="Logo" className="logo"/></Link>
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
