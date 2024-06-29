import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Button, Stack } from "@mui/material";
import { useCallback, useState } from "react";
import OptimalWayBlock from "./OptimalWayBlock.js";
import DefaultWayBlock from "./DefaultWayBlock.js";
import RequestService from "../services/RequestService.js";
import LinkButton from "./LinkButton.js";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt.js";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi.js";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk.js";
import "../styles/components/WaySelector.css";
import AddressesInputBlock from "./AddressesInputBlock";
import { translate } from "../services/LocalizationService";
import Loader from "./Loader";
function WaySelector() {
    const [optimalWay, setOptimalWay] = useState(null);
    const [defaultWay, setDefaultWay] = useState(null);
    const [isOptimalSelected, setIsOptimalSelected] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = useCallback((dto) => {
        setIsLoading(true);
        RequestService.getRoute(dto).then(data => {
            setOptimalWay(data.optimal);
            setDefaultWay(data.default);
        });
        setIsLoading(false);
    }, []);
    return (_jsxs(Stack, { direction: "column", spacing: 2, children: [_jsx(AddressesInputBlock, { handleSubmit: handleSubmit }), isLoading && _jsx(Loader, {}), optimalWay && defaultWay && (_jsxs(_Fragment, { children: [_jsx(OptimalWayBlock, { handleClick: () => {
                            setIsOptimalSelected(true);
                        }, wayData: optimalWay, selected: isOptimalSelected }), _jsx(DefaultWayBlock, { handleClick: () => {
                            setIsOptimalSelected(false);
                        }, wayData: defaultWay, selected: !isOptimalSelected }), isOptimalSelected && optimalWay.startUrl && optimalWay.endUrl && (_jsxs(Box, { className: "linkButtonBox", children: [_jsxs(LinkButton, { href: optimalWay.startUrl, children: [_jsx(DirectionsWalkIcon, {}), _jsx(ArrowRightAltIcon, {}), _jsx(LocalTaxiIcon, {})] }), _jsxs(LinkButton, { href: optimalWay.endUrl, children: [_jsx(LocalTaxiIcon, {}), _jsx(ArrowRightAltIcon, {}), _jsx(DirectionsWalkIcon, {})] })] })), _jsx(Button, { href: isOptimalSelected ? optimalWay.taxiUrl : defaultWay.taxiUrl, target: "_blank", variant: "contained", className: "taxiOrderButton", children: translate("mainPage.resultField.orderTaxi") })] }))] }));
}
export default WaySelector;
