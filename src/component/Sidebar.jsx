import {Drawer, List, ListItem, ListItemText, Toolbar} from "@mui/material";
import PropTypes from "prop-types";
import "./Sidebar.css";
import SidebarFooter from "./SidebarFooter";
import {translate} from "../services/LocalizationService.js";

function Sidebar({isOpen, onClose}) {

  const handleMenuItemClick = () => {
    onClose();
  };
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      variant="persistent"
      className="sidebar"
    >
      <Toolbar/>
      <List>
        <ListItem>
          <a href="#section1" onClick={handleMenuItemClick}>
            <ListItemText primary={translate('basement.menu.aboutUsPage')}/>
          </a>
        </ListItem>
        <ListItem>
          <a href="#section2" onClick={handleMenuItemClick}>
            <ListItemText primary={translate('basement.menu.howItWorksPage')}/>
          </a>
        </ListItem>
        <ListItem>
          <a href="#section3" onClick={handleMenuItemClick}>
            <ListItemText primary={translate('basement.menu.contacts')}/>
          </a>
        </ListItem>
      </List>
      <SidebarFooter className="sidebarFoot"/>
    </Drawer>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
