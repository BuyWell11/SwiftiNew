import {Box, Toolbar} from "@mui/material";
import {translate} from "../services/LocalizationService";
import "../styles/pages/Page.css"
import "../styles/pages/GuidePage.css"
import "../styles/Fonts.css"

function GuidePage() {

    const data: string[] = [];
    for (let i = 0; i < 8; i++) {
        data.push(translate(`userGuidePage.content.part${i + 1}`))
    }

    return (
        <Box className="page">
            <Box className="guide-page">
                <Toolbar/>
                <span className="h1">{translate("userGuidePage.title")}</span>
                <span className="caption">{translate("userGuidePage.subtitle")}</span>
                <ol>
                    {data.map((item, index) => (
                        <li className="body3" key={index}>{item}</li>
                    ))}
                </ol>
                <span className="body3-not-medium">{translate("userGuidePage.lastWords")}</span>
            </Box>
        </Box>
    )
}

export default GuidePage;