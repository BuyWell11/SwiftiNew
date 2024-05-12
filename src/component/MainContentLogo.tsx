import {Box} from "@mui/material";
import "../styles/MainContentLogo.css"
import LogoMainContent from "../img/LogoMainContent.svg"
import {translate} from "../services/LocalizationService";

function MainContentLogo() {
    return (
        <Box className="mainContentLogo">
            <img
                src={LogoMainContent}
                alt="SVG Image"
            />
            <Box className="mainContentLogoTextBox">
                <span>{translate("mainPage.title")}</span>
                <span>{translate("mainPage.subtitle")}</span>
            </Box>
        </Box>
    );
}

export default MainContentLogo;