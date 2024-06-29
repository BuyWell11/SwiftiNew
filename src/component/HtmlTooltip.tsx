import React from 'react';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

interface HtmlTooltipProps extends TooltipProps {}

const StyledTooltip = styled(({ className, ...props }: HtmlTooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} enterTouchDelay={0} />
))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#FDFCFC',
        color: '#2D2D2D',
        maxWidth: 220,
        fontSize: '12px',
        border: '1px solid #D5D5D5',
        borderRadius: '12px',
        lineHeight: '100%',
        weight: '400',
    },
}));


const HtmlTooltip: React.FC<HtmlTooltipProps> = (props) => {
    return <StyledTooltip {...props} />;
};

export default HtmlTooltip;
