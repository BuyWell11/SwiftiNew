import Typography from '@mui/material/Typography';
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

function UnderlinedText({children}: Props) {
    return (
        <Typography variant="h4" component="h4" sx={{
            color: '#2D2D2D',
            textDecoration: 'underline', textDecorationThickness: 3, textDecorationColor: '#03AD52'
        }}>
            {children}
        </Typography>
    );
}

export default UnderlinedText;
