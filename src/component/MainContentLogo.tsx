import {Box} from "@mui/material";
import "./MainContentLogo.css"
import LogoMainContent from "../img/LogoMainContent.svg"

function MainContentLogo(){
    return(
        <Box className="mainContentLogo">
            <img
                src={LogoMainContent}
                alt="SVG Image"
            />
            <Box className="mainContentLogoTextBox">
                <span>Сервис поиска оптимального{'\u00A0'}маршрута</span>
                <span>Экономим на такси</span>
            </Box>
        </Box>
    );
}

export default MainContentLogo;