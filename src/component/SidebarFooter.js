import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Box } from "@mui/material";
import Telegram from "../img/TelegramIcon.svg";
import MailIcon from "../img/MailIcon.svg";
import DonateIcon from "../img/DonateIcon.svg";
import IconLink from "./IconLink";
import CustomSelect from "./CustomSelect.js";
import SlideMenuWave from "../img/SlideMenuWave.svg";
import "../styles/components/SidebarFooter.css";
import { translate } from "../services/LocalizationService.js";
import { changeLocalization } from "../redux/userSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
function SidebarFooter({ className }) {
    const languages = useAppSelector(state => state.backendData.languages);
    const localization = useAppSelector(state => state.user.localization);
    const dispatch = useAppDispatch();
    const translatedLanguages = languages.map((language) => {
        return { label: translate(`basement.language.${language.label}`), value: language.value };
    });
    const handleChangeLanguage = (option) => {
        dispatch(changeLocalization(option));
    };
    return (_jsxs(AppBar, { position: "static", color: "primary", className: `appBarFooter ${className}`, children: [_jsx("img", { src: SlideMenuWave, alt: "Wave", className: "sidebarFooterWave" }), _jsxs(Box, { className: "sidebarFooter", children: [_jsx("hr", { className: "separator" }), _jsxs(Box, { className: "imgBoxAndSelect", children: [_jsxs(Box, { className: "sidebarFooterImgBox", children: [_jsx(IconLink, { image: MailIcon, link: "mailto:swiftitraveler@gmail.com" }), _jsx(IconLink, { image: Telegram, link: "https://t.me/swifti_app" }), _jsx(IconLink, { image: DonateIcon, link: "https://socprofile.com/swifti/" })] }), _jsx(CustomSelect, { options: translatedLanguages, selectedOption: translatedLanguages.find((language) => language.value === localization.value) || localization, handleClick: handleChangeLanguage })] })] })] }));
}
export default SidebarFooter;
