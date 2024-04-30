import {Box, Button} from "@mui/material";
import {ReactNode} from "react";
import "./LinkButton.css"

interface Props {
    href: string,
    handleClick: () => void;
    children?: ReactNode;
}

function LinkButton({href, handleClick, children, ...restProps}: Props) {
    return (
        <Button href={href} target="_blank" onClick={handleClick} {...restProps} className="linkButton">
            <Box className="iconsBox">
                {children}
            </Box>
        </Button>
    )
}

export default LinkButton;