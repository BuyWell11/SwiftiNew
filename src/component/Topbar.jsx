import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Logo from "../img/Logo.svg";
import "./Topbar.css";

function Topbar({ onMenuButtonClick, isSidebarOpen }) {
  return (
    <AppBar
      position="fixed"
      className="noShadow"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar className="topBar">
        <img src={Logo} alt="Logo" className="logo" />
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuButtonClick}
        >
          {isSidebarOpen ? (
            <CloseIcon className="topBarBtn" />
          ) : (
            <MenuIcon className="topBarBtn" />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

Topbar.propTypes = {
  onMenuButtonClick: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Topbar;
