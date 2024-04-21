import {Box, Toolbar} from "@mui/material";
import "./MainContent.css"
import MainContentLogo from "./MainContentLogo.jsx";
import AddressesInputBlock from "./AddressesInputBlock.jsx";
import OptimalWayBlock from "./OptimalWayBlock.jsx";
import DefaultWayBlock from "./DefaultWayBlock.jsx";
import WaySelector from "./WaySelector.jsx";

function MainContent() {
  return (
    <Box className="mainContent">
      <Toolbar/>
      <MainContentLogo/>
      <WaySelector/>
    </Box>
  );
}

export default MainContent;
