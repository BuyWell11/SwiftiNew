import {Box, Button, Stack} from "@mui/material";
import {useCallback, useState} from "react";
import OptimalWayBlock from "./OptimalWayBlock.js";
import DefaultWayBlock from "./DefaultWayBlock.js";
import RequestService from "../services/RequestService.js";
import LinkButton from "./LinkButton.js";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt.js";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi.js";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk.js";
import "./WaySelector.css"
import {RouteDTO} from "../dto/RouteDTO";
import {Way} from "../models/Way";
import AddressesInputBlock from "./AddressesInputBlock";
import {translate} from "../services/LocalizationService";

function WaySelector() {
    const [optimalWay, setOptimalWay] = useState<Way | null>(null)
    const [defaultWay, setDefaultWay] = useState<Way | null>(null)
    const [isOptimalSelected, setIsOptimalSelected] = useState(true)

    const handleSubmit = useCallback((dto: RouteDTO) => {
        RequestService.getRoute(dto).then(data => {
            setOptimalWay(data.optimal);
            setDefaultWay(data.default);
        })
    }, [])

    return (
        <Stack direction="column" spacing={2}>
            <AddressesInputBlock handleSubmit={handleSubmit}/>
            {optimalWay && defaultWay && (
                <>
                    <OptimalWayBlock handleClick={() => {
                        setIsOptimalSelected(true)
                    }} wayData={optimalWay} selected={isOptimalSelected}/>
                    <DefaultWayBlock handleClick={() => {
                        setIsOptimalSelected(false)
                    }} wayData={defaultWay} selected={!isOptimalSelected}/>
                    {isOptimalSelected && optimalWay.startUrl && optimalWay.endUrl && (
                        <Box className="linkButtonBox">
                            <LinkButton href={optimalWay.startUrl}>
                                <DirectionsWalkIcon/>
                                <ArrowRightAltIcon/>
                                <LocalTaxiIcon/>
                            </LinkButton>
                            <LinkButton href={optimalWay.endUrl}>
                                <LocalTaxiIcon/>
                                <ArrowRightAltIcon/>
                                <DirectionsWalkIcon/>
                            </LinkButton>
                        </Box>
                    )}
                    <Button href={isOptimalSelected ? optimalWay.taxiUrl : defaultWay.taxiUrl} target="_blank"
                            variant="contained"
                            className="taxiOrderButton">{translate("mainPage.resultField.orderTaxi")}</Button>
                </>
            )}
        </Stack>
    )
}

export default WaySelector;