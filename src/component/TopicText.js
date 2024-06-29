import { jsx as _jsx } from "react/jsx-runtime";
import Typography from '@mui/material/Typography';
function UnderlinedText({ children }) {
    return (_jsx(Typography, { variant: "h4", component: "h4", sx: {
            color: '#2D2D2D',
            textDecoration: 'underline', textDecorationThickness: 3, textDecorationColor: '#03AD52'
        }, children: children }));
}
export default UnderlinedText;
