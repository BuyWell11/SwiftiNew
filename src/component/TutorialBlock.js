import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TopicText from "./TopicText";
import { translate } from "../services/LocalizationService";
import { Box } from "@mui/material";
import tutorial from "../img/tutorial.mp4";
import "../styles/components/TutorialBlock.css";
function TutorialBlock() {
    return (_jsxs(Box, { className: "tutorialBlock", id: "tutorial", children: [_jsx(TopicText, { children: translate("mainPage.howItWorks.title") }), _jsx(Box, { className: "tutorialBlockContent", children: _jsxs("video", { controls: true, children: [_jsx("source", { src: tutorial, type: "video/mp4" }), "Your browser does not support the video tag."] }) })] }));
}
export default TutorialBlock;
