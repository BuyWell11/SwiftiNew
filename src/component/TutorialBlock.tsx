import TopicText from "./TopicText";
import {translate} from "../services/LocalizationService";
import {Box} from "@mui/material";
import tutorial from "../img/tutorial.mp4"
import "../styles/components/TutorialBlock.css"


function TutorialBlock() {
    return (
        <Box className="tutorialBlock" id="tutorial">
            <TopicText>{translate("mainPage.howItWorks.title")}</TopicText>
            <Box className="tutorialBlockContent">
                <video controls>
                    <source src={tutorial} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </Box>
        </Box>
    )
}

export default TutorialBlock;