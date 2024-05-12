import "../styles/Loader.css"
import {Box} from "@mui/material";

function Loader() {
    return (
        <Box className="loaderContainer">
            <div className="loader"></div>
        </Box>
    );
}

export default Loader;