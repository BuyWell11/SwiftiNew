import {AppBar, Box, Toolbar} from "@mui/material";
import Telegram from "../img/TelegramIcon.svg";
import MailIcon from "../img/MailIcon.svg";
import DonateIcon from "../img/DonateIcon.svg";
import IconLink from "./IconLink";
import CustomSelect from "./CustomSelect.js";
import SlideMenuWave from "../img/SlideMenuWave.svg";
import "./SidebarFooter.css";
import {translate} from "../services/LocalizationService.js";
import {changeLocalization} from "../redux/userSlice";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {CustomSelectOption} from "../models/CustomSelectOption";

interface Props {
    className: string;
}

function SidebarFooter({className}: Props) {
    const languages = useAppSelector(state => state.backendData.languages);
    const dispatch = useAppDispatch();
        
    const translatedLanguages = languages.map((language) => {
        return {label: translate(`basement.language.${language}`), value: 'ru-RU'}
    })

    const handleChangeLanguage = (option: CustomSelectOption) => {
        dispatch(changeLocalization(option))
    }

    return (
        <AppBar position="static" color="primary" className={`appBarFooter ${className}`}>
            <img src={SlideMenuWave} alt="Wave" className="sidebarFooterWave"/>
            <Toolbar className="sidebarFooter">
                <hr className="separator"/>
                <Box className="imgBoxAndSelect">
                    <Box className="sidebarFooterImgBox">
                        <IconLink image={MailIcon} link=""/>
                        <IconLink image={Telegram} link=""/>
                        <IconLink image={DonateIcon} link=""/>
                    </Box>
                    <CustomSelect options={translatedLanguages} handleClick={handleChangeLanguage}/>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default SidebarFooter;
