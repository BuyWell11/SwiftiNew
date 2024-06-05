import {Box, Button, Stack} from "@mui/material";
import {useCallback, useState} from "react";
import OptimalWayBlock from "./OptimalWayBlock.js";
import DefaultWayBlock from "./DefaultWayBlock.js";
import RequestService from "../services/RequestService.js";
import LinkButton from "./LinkButton.js";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt.js";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi.js";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk.js";
import "../styles/components/WaySelector.css"
import {Route} from "../models/Route";
import {Way} from "../models/Way";
import AddressesInputBlock from "./AddressesInputBlock";
import {translate} from "../services/LocalizationService";
import Loader from "./Loader";

function WaySelector() {
    const [optimalWay, setOptimalWay] = useState<Way | null>(null)
    const [defaultWay, setDefaultWay] = useState<Way | null>(null)
    const [isOptimalSelected, setIsOptimalSelected] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = useCallback((dto: Route) => {
        setIsLoading(true)
        RequestService.getRoute(dto).then(data => {
            setOptimalWay(data.optimal);
            setDefaultWay(data.default);
        })
        setIsLoading(false)
    }, [])

    return (
        <Stack direction="column" spacing={2}>
            <AddressesInputBlock handleSubmit={handleSubmit}/>
            {isLoading && <Loader/>}
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