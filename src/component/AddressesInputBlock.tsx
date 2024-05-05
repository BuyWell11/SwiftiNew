import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    Slider,
    Stack, styled,
    TextField,
    Tooltip,
    tooltipClasses, TooltipProps,
} from "@mui/material";
import {useFormik} from "formik";
import CustomSelect from "./CustomSelect.js";
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PlaceIcon from '@mui/icons-material/Place';
import "./AddressesInputBlock.css"
import {Fragment, useCallback, useEffect} from "react";
import FunctionUtils from "../utils/FunctionUtils.js";
import RequestService from "../services/RequestService.js";
import {RouteDTO} from "../dto/RouteDTO";
//import * as Yup from 'yup';
import {useAppSelector} from "../hooks/reduxHooks";
import {translate} from "../services/LocalizationService";
import {CustomSelectOption} from "../models/CustomSelectOption";
import {AddressDTO} from "../dto/AddressDTO";

interface Props {
    handleSubmit: Function;
}

interface HtmlTooltipProps extends TooltipProps {
    className?: string;
}

function AddressesInputBlock({handleSubmit}: Props) {

    const cities = useAppSelector(state => state.backendData.cities);

    const translatedCities = cities.map((city) => {
        return {label: translate(`mainPage.searchField.city.${city.label}`), value: city.value}
    })

    const HtmlTooltip = styled(({className, ...props}: HtmlTooltipProps) => (
        <Tooltip {...props} classes={{popper: className}} enterTouchDelay={0}/>
    ))(() => ({
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

    const marks = [
        {
            value: 0,
        },
        {
            value: 5,
        },
        {
            value: 10,
        }
    ]

    type State = {
        city: CustomSelectOption,
        time: number,
        from: AddressDTO | null,
        fromText: string,
        toText: string,
        fromOptions: AddressDTO[],
        toOptions: AddressDTO[],
        to: AddressDTO | null,
        agree: boolean,
    }

    const initialValue: State = {
        city: translatedCities[0],
        time: 0,
        from: null,
        fromText: "",
        toText: "",
        fromOptions: [],
        toOptions: [],
        to: null,
        agree: false,
    }

    const formState = useFormik({
        initialValues: initialValue,
        onSubmit: values => {
            const dto: RouteDTO = {
                startPoint: `${values.from?.latitude},${values.from?.longitude}`,
                endPoint: `${values.to?.latitude},${values.to?.longitude}`,
                walkingTime: values.time,
                city: values.city.value,
            }
            console.log(values)
            handleSubmit(dto)
        }
    })

    const handleFromAddresses = useCallback(
        FunctionUtils.debounce((address, city) => {
            if (address === '') {
                formState.setFieldValue('fromOptions', [])
                return
            }
            RequestService.getAddresses(address, city).then((data) => {
                formState.setFieldValue('fromOptions', data)
            })
        }, 1500),
        []
    );

    const handleToAddresses = useCallback(
        FunctionUtils.debounce((address, city) => {
            if (address === '') {
                formState.setFieldValue('toOptions', [])
                return
            }
            RequestService.getAddresses(address, city).then((data) => {
                formState.setFieldValue('toOptions', data)
            })
        }, 1500),
        []
    );

    useEffect(() => {
        handleFromAddresses(formState.values.fromText, formState.values.city)
    }, [formState.values.city, formState.values.fromText, handleFromAddresses]);

    useEffect(() => {
        handleToAddresses(formState.values.toText, formState.values.city)
    }, [formState.values.city, formState.values.toText, handleToAddresses]);

    useEffect(() => {
        formState.setFieldValue('city', translatedCities[0]);
        console.log(formState.values.city)
    }, [cities])

    return (
        <Box className="addressesInputBlock">
            <form onSubmit={formState.handleSubmit} className="addressInputBlockForm">
                <Stack direction="row" spacing={0.5}>
                    <PlaceIcon sx={{color: '#8D6EC8'}}/>
                    <CustomSelect options={translatedCities} selectedOption={formState.values.city}
                                  handleClick={(city: CustomSelectOption) => formState.setFieldValue('city', city)}/>
                </Stack>
                <hr className="separator"/>
                <span className="citySelectBlock">{translate("mainPage.searchField.title")}</span>
                <Stack direction="row" spacing={1} className="customSlider">
                    <DirectionsWalkIcon className="sliderIcon"/>
                    <Slider
                        name="time"
                        defaultValue={0}
                        value={formState.values.time}
                        step={null}
                        valueLabelDisplay="auto"
                        marks={marks}
                        max={10}
                        onChange={formState.handleChange}
                        color="primary"
                    />
                    <HtmlTooltip
                        title={
                            <Fragment>
                                <span>{translate("mainPage.searchField.tooltip")}</span>
                            </Fragment>
                        }
                    >
                        <HelpOutlineIcon className="sliderIcon" sx={{color: '#8D6EC8'}}/>
                    </HtmlTooltip>
                </Stack>
                <Stack direction="column" spacing={1.5} className="addressTextfieldBlock">
                    <span className="textfieldLabel">{translate("mainPage.searchField.from")}</span>
                    <Autocomplete
                        className="addressTextfield"
                        disablePortal
                        disableListWrap
                        value={formState.values.from}
                        inputValue={formState.values.fromText}
                        id="from"
                        options={formState.values.fromOptions}
                        getOptionLabel={(option) => option.label}
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        sx={{width: 300}}
                        onChange={(e, value) => {
                            formState.setFieldValue('from', value)
                        }}
                        onInputChange={(event, value) => formState.setFieldValue('fromText', value)}
                        renderInput={(params) => <TextField {...params}
                                                            label={translate("mainPage.searchField.placeHolder")}/>}
                    />
                </Stack>
                <Stack direction="column" spacing={1.5} className="addressTextfieldBlock">
                    <span className="textfieldLabel">{translate("mainPage.searchField.to")}</span>
                    <Autocomplete
                        className="addressTextfield"
                        disablePortal
                        disableListWrap
                        value={formState.values.to}
                        inputValue={formState.values.toText}
                        id="to"
                        options={formState.values.toOptions}
                        getOptionLabel={(option) => option.label}
                        isOptionEqualToValue={(option, value) => option.label === value.label}
                        sx={{width: 300}}
                        onChange={(e, value) => {
                            formState.setFieldValue('to', value)
                        }}
                        onInputChange={(event, value) => formState.setFieldValue('toText', value)}
                        renderInput={(params) => <TextField {...params}
                                                            label={translate("mainPage.searchField.placeHolder")}/>}
                    />
                </Stack>
                <Stack direction="row" spacing={1} className="agreeBlock">
                    <Checkbox
                        name="agree"
                        checked={formState.values.agree}
                        onChange={formState.handleChange}/>
                    <span>{translate("mainPage.searchField.termOfUseAcception")}</span>
                </Stack>
                <Button variant="contained" className="addressesInputButton" type="submit"
                        disabled={!formState.values.agree || !formState.values.from || !formState.values.to}>{translate("mainPage.searchField.findRoute")}</Button>
            </form>
        </Box>
    )
}

export default AddressesInputBlock;