import {Box, Toolbar} from "@mui/material";
import {translate} from "../services/LocalizationService";
import "../styles/pages/Page.css"
import "../styles/pages/TermOfUsePage.css"
import "../styles/Fonts.css"

function TermOfUsePage() {

    const generalProvisions: string[] = [];
    for (let i = 0; i < 7; i++) {
        generalProvisions.push(translate(`termOfUsePage.content.generalProvisions.content.part${i + 1}`))
    }

    const serviceUsage: string[] = [];
    for (let i = 0; i < 6; i++) {
        serviceUsage.push(translate(`termOfUsePage.content.serviceUsage.content.part${i + 1}`))
    }

    const otherProvision: string[] = [];
    for (let i = 0; i < 4; i++) {
        otherProvision.push(translate(`termOfUsePage.content.otherProvision.content.part${i + 1}`))
    }

    const copyrightInfo: string[] = [];
    for (let i = 0; i < 1; i++) {
        copyrightInfo.push(translate(`termOfUsePage.content.copyrightInfo.content.part${i + 1}`))
    }

    return (
        <Box className="page">
            <Box className="term-of-use-page">
                <Toolbar/>
                <span className="h1">{translate("termOfUsePage.title")}</span>
                <span className="caption">{translate("userGuidePage.subtitle")}</span>
                <Box>
                    <span className="body3">{translate("termOfUsePage.disclaimer.part1")}</span>
                    <span className="body3">{translate("termOfUsePage.disclaimer.part2")}</span>
                </Box>
                <Box>
                    <span className="h3">1. {translate("termOfUsePage.content.generalProvisions.title")}</span>
                    <ol>
                        {generalProvisions.map((item, index) => (
                            <li className="body3" key={index}>{item}</li>
                        ))}
                    </ol>
                </Box>
                <Box>
                    <span className="h3">2. {translate("termOfUsePage.content.serviceUsage.title")}</span>
                    <ol>
                        {serviceUsage.map((item, index) => (
                            <li className="body3" key={index}>{item}</li>
                        ))}
                    </ol>
                </Box>
                <Box>
                    <span className="h3">3. {translate("termOfUsePage.content.otherProvision.title")}</span>
                    <ol>
                        {otherProvision.map((item, index) => (
                            <li className="body3" key={index}>{item}</li>
                        ))}
                    </ol>
                </Box>
                <Box>
                    <span className="h3">4. {translate("termOfUsePage.content.otherProvision.title")}</span>
                    <ol>
                        {copyrightInfo.map((item, index) => (
                            <li className="body3" key={index}>{item}</li>
                        ))}
                    </ol>
                </Box>
                <span className="body3-not-medium">{translate("termOfUsePage.publicationDate")}</span>
                <span className="body3-not-medium">{translate("termOfUsePage.effectiveDate")}</span>
            </Box>
        </Box>
    )
}

export default TermOfUsePage;