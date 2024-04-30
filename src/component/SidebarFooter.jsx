import {AppBar, Box, Toolbar} from "@mui/material";
import Telegram from "../img/TelegramIcon.svg";
import MailIcon from "../img/MailIcon.svg";
import DonateIcon from "../img/DonateIcon.svg";
import IconLink from "./IconLink";
import CustomSelect from "./CustomSelect";
import SlideMenuWave from "../img/SlideMenuWave.svg";
import "./SidebarFooter.css";
import {useDispatch, useSelector} from "react-redux";
import {translate} from "../services/LocalizationService.js";
import {changeLocalization} from "../redux/userSlice.js";

function SidebarFooter() {
  const languages = useSelector(state => state.backendData.languages);
  const dispatch = useDispatch();

  const translatedLanguages = languages.map((language) => {
    return {label: translate(`basement.language.${language}`), value: 'ru-RU'}
  })

  const handleChangeLanguage = (option) => {
    dispatch(changeLocalization(option))
  }

  return (
    <AppBar position="static" color="primary" className="appBarFooter">
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
