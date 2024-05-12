import {Box} from "@mui/material";
import TopicText from "./TopicText";
import {translate} from "../services/LocalizationService";
import CardIcon from "../img/Card.svg"
import MailIcon from "../img/Mail.svg"
import TelegramIcon from "../img/Telegram.svg"
import "../styles/ContactsBlock.css"
import {DONATE, EMAIL, TG} from "../vars";


function ContactsBlock() {
    return (
        <Box className="contactsBlock">
            <TopicText>{translate("mainPage.contacts.title")}</TopicText>
            <Box className="contactsBlockContent">
                <Box>
                    <span>{translate("mainPage.contacts.contactUs.content")}</span>
                    <Box>
                        <img src={MailIcon} alt="img"/>
                        <a href="mailto:swiftitraveler@gmail.com"
                           rel="noreferrer">{EMAIL}</a>
                    </Box>
                    <Box>
                        <img src={TelegramIcon} alt="img"/>
                        <a href="https://t.me/swifti_app" target="_blank"
                           rel="noreferrer">{TG}</a>
                    </Box>
                </Box>
                <Box>
                    <span>{translate("mainPage.contacts.donateUs.content")}</span>
                    <Box>
                        <img src={CardIcon} alt="img"/>
                        <a href="mailto:swiftitraveler@gmail.com" target="_blank"
                           rel="noreferrer">{DONATE}</a>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ContactsBlock;