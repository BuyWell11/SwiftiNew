import {Box, Toolbar} from "@mui/material";
import "../styles/Page.css"
import MainContentLogo from "../component/MainContentLogo";
import WaySelector from "../component/WaySelector";
import AboutBlock from "../component/AboutBlock";
import ContactsBlock from "../component/ContactsBlock";

function MainPage() {
    return (
        <Box className="page">
            <Toolbar/>
            <MainContentLogo/>
            <WaySelector/>
            <AboutBlock/>
            <ContactsBlock/>
        </Box>
    );
}

export default MainPage;
