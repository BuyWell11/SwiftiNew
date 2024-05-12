import {Box, Button, ButtonProps} from "@mui/material";
import {ReactNode} from "react";
import "../styles/LinkButton.css"

interface Props extends ButtonProps {
    href: string,
    handleClick?: () => void;
    children?: ReactNode;
}

function LinkButton({href, handleClick, children}: Props) {
    return (
        <Button href={href} target="_blank" onClick={handleClick} variant="outlined" className="linkButton">
            <Box className="iconsBox">
                {children}
            </Box>
        </Button>
    )
}

export default LinkButton;