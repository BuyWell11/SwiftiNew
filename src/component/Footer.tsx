import {Box} from "@mui/material";
import "../styles/components/Footer.css"
import {Link} from "react-router-dom";
import {translate} from "../services/LocalizationService";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };
    return (
        <Box className="footer">
            <hr className="separator"/>
            <Link to="guide" onClick={scrollToTop}>{translate("basement.documents.userGuide")}</Link>
            <Link to="term_of_use" onClick={scrollToTop}>{translate("basement.documents.termOfUse")}</Link>
        </Box>
    )
}

export default Footer;