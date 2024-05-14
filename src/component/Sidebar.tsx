import {Drawer, List, ListItem, ListItemText, Toolbar} from "@mui/material";
import "../styles/components/Sidebar.css";
import SidebarFooter from "./SidebarFooter.js";
import {translate} from "../services/LocalizationService.js";
import {Link} from "react-router-dom";

interface Props {
    isOpen: boolean,
    onClose: Function,
}

function Sidebar({isOpen, onClose}: Props) {

    const handleMenuItemClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
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
                    <Link to="/#about" onClick={() => handleMenuItemClick("about")}>
                        <ListItemText primary={translate('basement.menu.aboutUsPage')}/>
                    </Link>
                </ListItem>
                {/*<ListItem>
                    <a href="#section2" onClick={handleMenuItemClick}>
                        <ListItemText primary={translate('basement.menu.howItWorksPage')}/>
                    </a>
                </ListItem>*/}
                <ListItem>
                    <Link to="/#contacts" onClick={() => handleMenuItemClick("contacts")}>
                        <ListItemText primary={translate('basement.menu.contacts')}/>
                    </Link>
                </ListItem>
            </List>
            <SidebarFooter className="sidebarFoot"/>
        </Drawer>
    );
}

export default Sidebar;
