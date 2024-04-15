import {Box, Toolbar} from "@mui/material";
import "./MainContent.css"
import MainContentLogo from "./MainContentLogo.jsx";
import AddressesInputBlock from "./AddressesInputBlock.jsx";

function MainContent() {
  return (
    <Box className="mainContent">
      <Toolbar/>
      <MainContentLogo/>
      <AddressesInputBlock/>
    </Box>
  );
}

export default MainContent;
