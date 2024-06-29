import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Toolbar } from "@mui/material";
import { translate } from "../services/LocalizationService";
import "../styles/pages/Page.css";
import "../styles/pages/TermOfUsePage.css";
import "../styles/Fonts.css";
function TermOfUsePage() {
    const generalProvisions = [];
    for (let i = 0; i < 7; i++) {
        generalProvisions.push(translate(`termOfUsePage.content.generalProvisions.content.part${i + 1}`));
    }
    const serviceUsage = [];
    for (let i = 0; i < 6; i++) {
        serviceUsage.push(translate(`termOfUsePage.content.serviceUsage.content.part${i + 1}`));
    }
    const otherProvision = [];
    for (let i = 0; i < 4; i++) {
        otherProvision.push(translate(`termOfUsePage.content.otherProvision.content.part${i + 1}`));
    }
    const copyrightInfo = [];
    for (let i = 0; i < 1; i++) {
        copyrightInfo.push(translate(`termOfUsePage.content.copyrightInfo.content.part${i + 1}`));
    }
    return (_jsx(Box, { className: "page", children: _jsxs(Box, { className: "term-of-use-page", children: [_jsx(Toolbar, {}), _jsx("span", { className: "h1", children: translate("termOfUsePage.title") }), _jsx("span", { className: "caption", children: translate("userGuidePage.subtitle") }), _jsxs(Box, { children: [_jsx("span", { className: "body3", children: translate("termOfUsePage.disclaimer.part1") }), _jsx("span", { className: "body3", children: translate("termOfUsePage.disclaimer.part2") })] }), _jsxs(Box, { children: [_jsxs("span", { className: "h3", children: ["1. ", translate("termOfUsePage.content.generalProvisions.title")] }), _jsx("ol", { children: generalProvisions.map((item, index) => (_jsx("li", { className: "body3", children: item }, index))) })] }), _jsxs(Box, { children: [_jsxs("span", { className: "h3", children: ["2. ", translate("termOfUsePage.content.serviceUsage.title")] }), _jsx("ol", { children: serviceUsage.map((item, index) => (_jsx("li", { className: "body3", children: item }, index))) })] }), _jsxs(Box, { children: [_jsxs("span", { className: "h3", children: ["3. ", translate("termOfUsePage.content.otherProvision.title")] }), _jsx("ol", { children: otherProvision.map((item, index) => (_jsx("li", { className: "body3", children: item }, index))) })] }), _jsxs(Box, { children: [_jsxs("span", { className: "h3", children: ["4. ", translate("termOfUsePage.content.otherProvision.title")] }), _jsx("ol", { children: copyrightInfo.map((item, index) => (_jsx("li", { className: "body3", children: item }, index))) })] }), _jsx("span", { className: "body3-not-medium", children: translate("termOfUsePage.publicationDate") }), _jsx("span", { className: "body3-not-medium", children: translate("termOfUsePage.effectiveDate") })] }) }));
}
export default TermOfUsePage;
