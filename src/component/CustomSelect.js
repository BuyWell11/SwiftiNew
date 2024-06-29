import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ClickAwayListener } from "@mui/material";
import ArrowIcon from "../img/DownArrow.svg";
import "../styles/components/CustomSelect.css";
const CustomSelect = ({ options, selectedOption, handleClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (option) => {
        handleClick(option);
        setIsOpen(false);
    };
    const handleClickAway = () => {
        setIsOpen(false);
    };
    return (_jsxs("div", { className: "customSelect", children: [_jsxs("div", { className: "selectedOption", onClick: toggleMenu, children: [selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label, _jsx("img", { src: ArrowIcon, alt: "Arrow", className: "arrowDown" })] }), isOpen && options.length > 1 && (_jsx(ClickAwayListener, { onClickAway: handleClickAway, children: _jsx("div", { className: "customSelectMenu", children: options.map((option, index) => (_jsx("div", { className: option.value === (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value)
                            ? "customSelectMenuItemSelected"
                            : "customSelectMenuItem", onClick: () => handleOptionClick(option), children: option.label }, index))) }) }))] }));
};
export default CustomSelect;
