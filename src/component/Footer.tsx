import {Box} from "@mui/material";
import "../styles/Footer.css"
import {Link} from "react-router-dom";
import {translate} from "../services/LocalizationService";

function Footer() {
    return (
        <Box className="footer">
            <hr className="separator"/>
            <Link to="guide">{translate("basement.documents.userGuide")}</Link>
        </Box>
    )
}

export default Footer;