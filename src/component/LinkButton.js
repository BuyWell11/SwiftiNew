import { jsx as _jsx } from "react/jsx-runtime";
import { Box, Button } from "@mui/material";
import "../styles/components/LinkButton.css";
function LinkButton({ href, handleClick, children }) {
    return (_jsx(Button, { href: href, target: "_blank", onClick: handleClick, variant: "outlined", className: "linkButton", children: _jsx(Box, { className: "iconsBox", children: children }) }));
}
export default LinkButton;
