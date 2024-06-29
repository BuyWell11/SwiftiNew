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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Autocomplete, Box, Button, Checkbox, Slider, Stack, styled, TextField, Tooltip, tooltipClasses, } from "@mui/material";
import { useFormik } from "formik";
import CustomSelect from "./CustomSelect.js";
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PlaceIcon from '@mui/icons-material/Place';
import "../styles/components/AddressesInputBlock.css";
import { Fragment, useCallback, useEffect } from "react";
import FunctionUtils from "../utils/FunctionUtils.js";
import RequestService from "../services/RequestService.js";
//import * as Yup from 'yup';
import { useAppSelector } from "../hooks/reduxHooks";
import { translate } from "../services/LocalizationService";
function AddressesInputBlock({ handleSubmit }) {
    const localization = useAppSelector(state => state.user.localization);
    const cities = useAppSelector(state => state.backendData.cities);
    const translatedCities = cities.map((city) => {
        return { label: translate(`mainPage.searchField.city.${city.label}`), value: city.value };
    });
    const myPositionLabel = translate("mainPage.searchField.myLocation");
    const HtmlTooltip = styled((_a) => {
        var { className } = _a, props = __rest(_a, ["className"]);
        return (_jsx(Tooltip, Object.assign({}, props, { classes: { popper: className }, enterTouchDelay: 0 })));
    })(() => ({
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
    ];
    const initialValue = {
        city: translatedCities[0],
        time: 0,
        from: null,
        fromText: "",
        toText: "",
        fromOptions: [],
        toOptions: [],
        to: null,
        myPosition: null,
        agree: false,
    };
    const formState = useFormik({
        initialValues: initialValue,
        onSubmit: values => {
            var _a, _b, _c, _d;
            const dto = {
                startPoint: `${(_a = values.from) === null || _a === void 0 ? void 0 : _a.latitude},${(_b = values.from) === null || _b === void 0 ? void 0 : _b.longitude}`,
                endPoint: `${(_c = values.to) === null || _c === void 0 ? void 0 : _c.latitude},${(_d = values.to) === null || _d === void 0 ? void 0 : _d.longitude}`,
                walkingTime: values.time,
                city: values.city.value,
            };
            handleSubmit(dto);
        }
    });
    useEffect(() => {
        const successHandler = (position) => {
            const { latitude, longitude } = position.coords;
            const myPosition = {
                label: myPositionLabel,
                latitude: latitude,
                longitude: longitude,
                id: 0,
            };
            //костыль чтобы был актуальны перевод, мб потом починю
            formState.values.myPosition = myPosition;
            formState.values.fromOptions = [myPosition];
            formState.setFieldValue("myPosition", myPosition);
            formState.setFieldValue("fromOptions", [myPosition]);
        };
        const errorHandler = (error) => {
            console.log(error.message);
        };
        const watchId = navigator.geolocation.watchPosition(successHandler, errorHandler);
        navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, [localization]);
    const handleFromAddresses = useCallback(FunctionUtils.debounce((address, city) => {
        if (address === '') {
            formState.setFieldValue('fromOptions', formState.values.myPosition ? [formState.values.myPosition] : []);
            return;
        }
        RequestService.getAddresses(address, city).then((data) => {
            formState.setFieldValue('fromOptions', data);
        });
    }, 1000), []);
    const handleToAddresses = useCallback(FunctionUtils.debounce((address, city) => {
        if (address === '') {
            formState.setFieldValue('toOptions', []);
            return;
        }
        RequestService.getAddresses(address, city).then((data) => {
            formState.setFieldValue('toOptions', data);
        });
    }, 1000), []);
    useEffect(() => {
        handleFromAddresses(formState.values.fromText, formState.values.city);
    }, [formState.values.city, formState.values.fromText, handleFromAddresses]);
    useEffect(() => {
        handleToAddresses(formState.values.toText, formState.values.city);
    }, [formState.values.city, formState.values.toText, handleToAddresses]);
    useEffect(() => {
        formState.setFieldValue('city', translatedCities[0]);
    }, [cities]);
    return (_jsx(Box, { className: "addressesInputBlock", children: _jsxs("form", { onSubmit: formState.handleSubmit, className: "addressInputBlockForm", children: [_jsxs(Stack, { direction: "row", spacing: 0.5, children: [_jsx(PlaceIcon, { sx: { color: '#8D6EC8' } }), _jsx(CustomSelect, { options: translatedCities, selectedOption: formState.values.city, handleClick: (city) => formState.setFieldValue('city', city) })] }), _jsx("hr", { className: "separator" }), _jsx("span", { className: "citySelectBlock", children: translate("mainPage.searchField.title") }), _jsxs(Stack, { direction: "row", spacing: 1, className: "customSlider", children: [_jsx(DirectionsWalkIcon, { sx: { color: '#2D2D2D' } }), _jsx(Slider, { name: "time", defaultValue: 0, value: formState.values.time, step: null, valueLabelDisplay: "auto", marks: marks, max: 10, onChange: formState.handleChange, color: "primary" }), _jsx(HtmlTooltip, { title: _jsx(Fragment, { children: _jsx("span", { children: translate("mainPage.searchField.tooltip") }) }), children: _jsx(HelpOutlineIcon, { className: "sliderIcon", sx: { color: '#8D6EC8' } }) })] }), _jsxs(Stack, { direction: "column", spacing: 1.5, className: "addressTextfieldBlock", children: [_jsx("span", { className: "textfieldLabel", children: translate("mainPage.searchField.from") }), _jsx(Autocomplete, { className: "addressTextfield", disablePortal: true, disableListWrap: true, value: formState.values.from, inputValue: formState.values.fromText, id: "from", options: formState.values.fromOptions, filterOptions: (options) => options, noOptionsText: translate("mainPage.searchField.noOptionText"), getOptionLabel: (option) => option.label, isOptionEqualToValue: (option, value) => option.id === value.id, sx: { width: 300 }, onChange: (e, value) => {
                                formState.setFieldValue('from', value);
                            }, onInputChange: (event, value) => formState.setFieldValue('fromText', value), renderInput: (params) => _jsx(TextField, Object.assign({}, params, { label: translate("mainPage.searchField.placeHolder") })) })] }), _jsxs(Stack, { direction: "column", spacing: 1.5, className: "addressTextfieldBlock", children: [_jsx("span", { className: "textfieldLabel", children: translate("mainPage.searchField.to") }), _jsx(Autocomplete, { className: "addressTextfield", disablePortal: true, disableListWrap: true, value: formState.values.to, inputValue: formState.values.toText, id: "to", options: formState.values.toOptions, filterOptions: (options) => options, noOptionsText: translate("mainPage.searchField.noOptionText"), getOptionLabel: (option) => option.label, isOptionEqualToValue: (option, value) => option.label === value.label, sx: { width: 300 }, onChange: (e, value) => {
                                formState.setFieldValue('to', value);
                            }, onInputChange: (event, value) => formState.setFieldValue('toText', value), renderInput: (params) => _jsx(TextField, Object.assign({}, params, { label: translate("mainPage.searchField.placeHolder") })) })] }), _jsxs(Stack, { direction: "row", spacing: 1, className: "agreeBlock", children: [_jsx(Checkbox, { name: "agree", checked: formState.values.agree, onChange: formState.handleChange }), _jsx("span", { children: translate("mainPage.searchField.termOfUseAcception") })] }), _jsx(Button, { variant: "contained", className: "addressesInputButton", type: "submit", disabled: !formState.values.agree || !formState.values.from || !formState.values.to, children: translate("mainPage.searchField.findRoute") })] }) }));
}
export default AddressesInputBlock;
