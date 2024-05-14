import {AppBar, Box} from "@mui/material";
import Telegram from "../img/TelegramIcon.svg";
import MailIcon from "../img/MailIcon.svg";
import DonateIcon from "../img/DonateIcon.svg";
import IconLink from "./IconLink";
import CustomSelect from "./CustomSelect.js";
import SlideMenuWave from "../img/SlideMenuWave.svg";
import "../styles/components/SidebarFooter.css";
import {translate} from "../services/LocalizationService.js";
import {changeLocalization} from "../redux/userSlice";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {CustomSelectOption} from "../models/CustomSelectOption";

interface Props {
    className: string;
}

function SidebarFooter({className}: Props) {
    const languages = useAppSelector(state => state.backendData.languages);
    const localization = useAppSelector(state => state.user.localization);
    const dispatch = useAppDispatch();

    const translatedLanguages = languages.map((language) => {
        return {label: translate(`basement.language.${language.label}`), value: language.value}
    })

    const handleChangeLanguage = (option: CustomSelectOption) => {
        dispatch(changeLocalization(option))
    }

    return (
        <AppBar position="static" color="primary" className={`appBarFooter ${className}`}>
            <img src={SlideMenuWave} alt="Wave" className="sidebarFooterWave"/>
            <Box className="sidebarFooter">
                <hr className="separator"/>
                <Box className="imgBoxAndSelect">
                    <Box className="sidebarFooterImgBox">
                        <IconLink image={MailIcon} link="mailto:swiftitraveler@gmail.com"/>
                        <IconLink image={Telegram} link="https://t.me/swifti_app"/>
                        <IconLink image={DonateIcon} link="https://socprofile.com/swifti/"/>
                    </Box>
                    <CustomSelect options={translatedLanguages}
                                  selectedOption={translatedLanguages.find((language) => language.value === localization.value) || localization}
                                  handleClick={handleChangeLanguage}/>
                </Box>
            </Box>
        </AppBar>
    );
}

export default SidebarFooter;
