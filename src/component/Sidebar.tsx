import {Drawer, List, ListItem, ListItemText, Toolbar} from "@mui/material";
import "./Sidebar.css";
import SidebarFooter from "./SidebarFooter.js";
import {translate} from "../services/LocalizationService.js";

interface Props {
    isOpen: boolean,
    onClose: Function,
}

function Sidebar({isOpen, onClose}: Props) {

    const handleMenuItemClick = () => {
        onClose();
    };
    return (
        <Drawer
            anchor="right"
            open={isOpen}
            onClose={() => onClose()}
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

export default Sidebar;
