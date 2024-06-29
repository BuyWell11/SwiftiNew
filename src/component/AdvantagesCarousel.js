import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import "../styles/components/AdvantagesCarousel.css";
function AdvantagesCarousel({ data }) {
    return (_jsx(Carousel, { indicators: false, animation: "slide", autoPlay: true, interval: 5000, swipe: true, navButtonsAlwaysVisible: false, cycleNavigation: true, children: data.map((item, index) => (_jsxs(Box, { className: "advantagesCarouselCard", children: [_jsx(Typography, { variant: "h5", component: "div", children: item.label }), _jsx(Typography, { variant: "body1", component: "div", children: item.value })] }, index))) }));
}
export default AdvantagesCarousel;
