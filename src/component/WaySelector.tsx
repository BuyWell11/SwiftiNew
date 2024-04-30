import {Box, Button, Stack} from "@mui/material";
import {useCallback, useState} from "react";
import OptimalWayBlock from "./OptimalWayBlock.js";
import DefaultWayBlock from "./DefaultWayBlock.js";
import AddressesInputBlock from "./AddressesInputBlock.tsx";
import RequestService from "../services/RequestService.js";
import LinkButton from "./LinkButton.js";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt.js";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi.js";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk.js";
import "./WaySelector.css"
import {RouteDTO} from "../dto/RouteDTO";

function WaySelector() {
    const [optimalWay, setOptimalWay] = useState(null)
    const [defaultWay, setDefaultWay] = useState(null)
    const [isOptimalSelected, setIsOptimalSelected] = useState(true)

    const handleSubmit = useCallback((dto: RouteDTO) => {

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
                    {isOptimalSelected && (
                        <Box className="linkButtonBox">
                            <LinkButton href={optimalWay.startUrl} variant="outlined">
                                <DirectionsWalkIcon/>
                                <ArrowRightAltIcon/>
                                <LocalTaxiIcon/>
                            </LinkButton>
                            <LinkButton href={optimalWay.endUrl} variant="outlined">
                                <LocalTaxiIcon/>
                                <ArrowRightAltIcon/>
                                <DirectionsWalkIcon/>
                            </LinkButton>
                        </Box>
                    )}
                    <Button href={isOptimalSelected ? optimalWay.taxiUrl : defaultWay.url} target="_blank"
                            variant="contained"
                            className="taxiOrderButton">Заказать такси</Button>
                </>
            )}
        </Stack>
    )
}

export default WaySelector;