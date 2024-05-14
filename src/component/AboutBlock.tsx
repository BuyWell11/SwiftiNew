import {Box} from "@mui/material";
import TopicText from "./TopicText";
import {translate} from "../services/LocalizationService";
import "../styles/components/AboutBlock.css"
import AdvantagesCarousel from "./AdvantagesCarousel";

function AboutBlock() {

    const advantages: { label: string, value: string }[] = [];

    advantages.push({
        label: translate("mainPage.aboutUs.advantages.economy.title"),
        value: translate("mainPage.aboutUs.advantages.economy.content")
    })
    advantages.push({
        label: translate("mainPage.aboutUs.advantages.ecoFriendliness.title"),
        value: translate("mainPage.aboutUs.advantages.ecoFriendliness.content")
    })
    advantages.push({
        label: translate("mainPage.aboutUs.advantages.activity.title"),
        value: translate("mainPage.aboutUs.advantages.activity.content")
    })

    return (
        <Box className="aboutBlock" id="about">
            <TopicText>{translate("mainPage.aboutUs.title")}</TopicText>
            <Box className="aboutBlockContent">
                <Box>
                    <span>{translate("mainPage.aboutUs.content.firstParagraf")}</span>
                </Box>
                <Box>
                    <span>{translate("mainPage.aboutUs.content.secondParagraf")}</span>
                </Box>
            </Box>
            <Box className="aboutBlockContentAdvantages">
                <Box>
                    <span>{translate("mainPage.aboutUs.advantages.title")}</span>
                </Box>
                <AdvantagesCarousel data={advantages}/>
            </Box>
        </Box>
    )
}

export default AboutBlock;