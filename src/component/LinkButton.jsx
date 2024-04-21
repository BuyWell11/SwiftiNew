import PropTypes from "prop-types";
import {Box, Button} from "@mui/material";
import "./LinkButton.css"

function LinkButton({href, handleClick, children, ...restProps}) {
  return (
    <Button href={href} target="_blank" onClick={handleClick} {...restProps} className="linkButton">
      <Box className="iconsBox">
        {children}
      </Box>
    </Button>
  )
}

LinkButton.propTypes = {
  href: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.node
};

export default LinkButton;