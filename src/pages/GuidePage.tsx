import {Box, Toolbar} from "@mui/material";
import Typography from "@mui/material/Typography";
import {translate} from "../services/LocalizationService";
import "../styles/Page.css"

function GuidePage() {

    const data: string[] = [];
    data.push(translate("userGuidePage.content.firstPart"))
    data.push(translate("userGuidePage.content.secondPart"))
    data.push(translate("userGuidePage.content.firstPart"))
    data.push(translate("userGuidePage.content.fourthPart"))
    data.push(translate("userGuidePage.content.fifthPart"))
    data.push(translate("userGuidePage.content.sixthPart"))

    return (
        <Box className="page">
            <Box>
                <Toolbar/>
                <Typography variant="h4" color="#2D2D2D">{translate("userGuidePage.title")}</Typography>
                <Typography variant="subtitle1" color="#2D2D2D">{translate("userGuidePage.subtitle")}</Typography>
                <ol>
                    {data.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </Box>
        </Box>
    )
}

export default GuidePage;