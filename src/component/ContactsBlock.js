import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "@mui/material";
import TopicText from "./TopicText";
import { translate } from "../services/LocalizationService";
import CardIcon from "../img/Card.svg";
import MailIcon from "../img/Mail.svg";
import TelegramIcon from "../img/Telegram.svg";
import "../styles/components/ContactsBlock.css";
import { DONATE, EMAIL, TG } from "../vars";
function ContactsBlock() {
    return (_jsxs(Box, { className: "contactsBlock", id: "contacts", children: [_jsx(TopicText, { children: translate("mainPage.contacts.title") }), _jsxs(Box, { className: "contactsBlockContent", children: [_jsxs(Box, { children: [_jsx("span", { children: translate("mainPage.contacts.contactUs.content") }), _jsxs(Box, { children: [_jsx("img", { src: MailIcon, alt: "img" }), _jsx("a", { href: "mailto:swiftitraveler@gmail.com", rel: "noreferrer", children: EMAIL })] }), _jsxs(Box, { children: [_jsx("img", { src: TelegramIcon, alt: "img" }), _jsx("a", { href: "https://t.me/swifti_app", target: "_blank", rel: "noreferrer", children: TG })] })] }), _jsxs(Box, { children: [_jsx("span", { children: translate("mainPage.contacts.donateUs.content") }), _jsxs(Box, { children: [_jsx("img", { src: CardIcon, alt: "img" }), _jsx("a", { href: "mailto:swiftitraveler@gmail.com", target: "_blank", rel: "noreferrer", children: DONATE })] })] })] })] }));
}
export default ContactsBlock;
