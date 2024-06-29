import { jsx as _jsx } from "react/jsx-runtime";
import "../styles/components/Loader.css";
import { Box } from "@mui/material";
function Loader() {
    return (_jsx(Box, { className: "loaderContainer", children: _jsx("div", { className: "loader" }) }));
}
export default Loader;
