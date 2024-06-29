var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { styled, tooltipClasses } from "@mui/material";
function HtmlTooltip(props) {
    const HtmlTooltip = styled((_a) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return (Object.assign({}, props));
    }, classes = {}, { popper: className });
}
enterTouchDelay = { 0:  } /  >
;
(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#FDFCFC',
        color: '#2D2D2D',
        maxWidth: 220,
        fontSize: '12px',
        border: '1px solid #D5D5D5',
        borderRadius: '12px',
        lineHeight: '100%',
        weight: '400'
    },
}));
