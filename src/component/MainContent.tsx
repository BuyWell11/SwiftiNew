import {Box, Toolbar} from "@mui/material";
import "./MainContent.css"
import MainContentLogo from "./MainContentLogo";
import WaySelector from "./WaySelector";

function MainContent() {
    return (
        <Box className="mainContent">
            <Toolbar/>
            <MainContentLogo/>
            <WaySelector/>
        </Box>
    );
}

export default MainContent;
