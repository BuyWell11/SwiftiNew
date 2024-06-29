import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "@mui/material";
import TopicText from "./TopicText";
import { translate } from "../services/LocalizationService";
import "../styles/components/AboutBlock.css";
import AdvantagesCarousel from "./AdvantagesCarousel";
function AboutBlock() {
    const advantages = [];
    advantages.push({
        label: translate("mainPage.aboutUs.advantages.economy.title"),
        value: translate("mainPage.aboutUs.advantages.economy.content")
    });
    advantages.push({
        label: translate("mainPage.aboutUs.advantages.ecoFriendliness.title"),
        value: translate("mainPage.aboutUs.advantages.ecoFriendliness.content")
    });
    advantages.push({
        label: translate("mainPage.aboutUs.advantages.activity.title"),
        value: translate("mainPage.aboutUs.advantages.activity.content")
    });
    return (_jsxs(Box, { className: "aboutBlock", id: "about", children: [_jsx(TopicText, { children: translate("mainPage.aboutUs.title") }), _jsxs(Box, { className: "aboutBlockContent", children: [_jsx(Box, { children: _jsx("span", { children: translate("mainPage.aboutUs.content.firstParagraf") }) }), _jsx(Box, { children: _jsx("span", { children: translate("mainPage.aboutUs.content.secondParagraf") }) })] }), _jsxs(Box, { className: "aboutBlockContentAdvantages", children: [_jsx(Box, { children: _jsx("span", { children: translate("mainPage.aboutUs.advantages.title") }) }), _jsx(AdvantagesCarousel, { data: advantages })] })] }));
}
export default AboutBlock;
