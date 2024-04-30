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

interface Props {
    handleSubmit: Function;
}

interface HtmlTooltipProps extends TooltipProps {
    className: string;
}

function AddressesInputBlock({handleSubmit}: Props) {


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

    let test = ['Москва', 'Нижний Новгород'];

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

    const formState = useFormik({
        initialValues: {
            city: test[0],
            time: 0,
            from: null,
            fromText: '',
            toText: '',
            fromOptions: [],
            toOptions: [],
            to: null,
            agree: false,
        },
        onSubmit: values => {
            const dto: RouteDTO = {
                startPoint: values.from,
                endPoint: values.to,
                walkingTime: values.time
            }
            console.log(dto)
            handleSubmit(dto)
        }
    })

    const handleFromAddresses = useCallback(
        FunctionUtils.debounce((address) => {
            if (address === '') {
                formState.setFieldValue('fromOptions', [])
                return
            }
            RequestService.getAddresses(address).then((data) => {
                formState.setFieldValue('fromOptions', data)
            })
        }, 1500),
        []
    );

    const handleToAddresses = useCallback(
        FunctionUtils.debounce((address) => {
            if (address === '') {
                formState.setFieldValue('toOptions', [])
                return
            }
            RequestService.getAddresses(address).then((data) => {
                formState.setFieldValue('toOptions', data)
            })
        }, 1500),
        []
    );

    useEffect(() => {
        handleFromAddresses(formState.values.fromText)
    }, [formState.values.fromText, handleFromAddresses]);

    useEffect(() => {
        handleToAddresses(formState.values.toText)
    }, [formState.values.toText, handleToAddresses]);

    return (
        <Box className="addressesInputBlock">
            <form onSubmit={formState.handleSubmit} className="addressInputBlockForm">
                <Stack direction="row" spacing={0.5}>
                    <PlaceIcon sx={{color: '#8D6EC8'}}/>
                    <CustomSelect options={test} handleClick={(text) => formState.values.city = text}/>
                </Stack>
                <hr className="separator"/>
                <span className="citySelectBlock">Выбрать маршрут</span>
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
                                <span>Укажите сколько минут вы готовы идти пешком</span>
                            </Fragment>
                        }
                    >
                        <HelpOutlineIcon className="sliderIcon" sx={{color: '#8D6EC8'}}/>
                    </HtmlTooltip>
                </Stack>
                <Stack direction="column" spacing={1.5} className="addressTextfieldBlock">
                    <span className="textfieldLabel">Откуда</span>
                    <Autocomplete
                        name="from"
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
                        renderInput={(params) => <TextField {...params} label="Адрес"/>}
                    />
                </Stack>
                <Stack direction="column" spacing={1.5} className="addressTextfieldBlock">
                    <span className="textfieldLabel">Куда</span>
                    <Autocomplete
                        className="addressTextfield"
                        name="to"
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
                        renderInput={(params) => <TextField {...params} label="Адрес"/>}
                    />
                </Stack>
                <Stack direction="row" spacing={1} className="agreeBlock">
                    <Checkbox
                        name="agree"
                        checked={formState.values.agree}
                        onChange={formState.handleChange}/>
                    <span>Согласен с Пользовательским соглашением</span>
                </Stack>
                <Button variant="contained" className="addressesInputButton" type="submit"
                        disabled={!formState.values.agree || !formState.values.from || !formState.values.to}>Подобрать
                    маршрут</Button>
            </form>
        </Box>
    )
}

export default AddressesInputBlock;