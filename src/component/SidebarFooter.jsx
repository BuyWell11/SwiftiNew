import {AppBar, Box, Toolbar} from "@mui/material";
import Telegram from "../img/TelegramIcon.svg";
import MailIcon from "../img/MailIcon.svg";
import DonateIcon from "../img/DonateIcon.svg";
import IconLink from "./IconLink";
import CustomSelect from "./CustomSelect";
import SlideMenuWave from "../img/SlideMenuWave.svg";
import "./SidebarFooter.css";

function SidebarFooter() {
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
          <CustomSelect options={["бебра", "беброва"]} handleClick={(text) => console.log(text)}/>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default SidebarFooter;
