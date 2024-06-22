import {Box, Toolbar} from "@mui/material";
import "../styles/pages/Page.css"
import MainContentLogo from "../component/MainContentLogo";
import WaySelector from "../component/WaySelector";
import AboutBlock from "../component/AboutBlock";
import ContactsBlock from "../component/ContactsBlock";
import TutorialBlock from "../component/TutorialBlock";

function MainPage() {
    return (
        <Box className="page">
            <Toolbar/>
            <MainContentLogo/>
            <WaySelector/>
            <AboutBlock/>
            <TutorialBlock/>
            <ContactsBlock/>
        </Box>
    );
}

export default MainPage;
