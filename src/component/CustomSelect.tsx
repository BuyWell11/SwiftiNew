import {useState} from "react";
import {ClickAwayListener} from "@mui/material";
import ArrowIcon from "../img/DownArrow.svg";
import "../styles/CustomSelect.css";
import {CustomSelectOption} from "../models/CustomSelectOption";

interface Props {
    options: CustomSelectOption[];
    selectedOption: CustomSelectOption | null;
    handleClick: Function;
}

const CustomSelect = ({options, selectedOption, handleClick}: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: CustomSelectOption) => {
        handleClick(option)
        setIsOpen(false);
    };

    const handleClickAway = () => {
        setIsOpen(false);
    };

    return (
        <div className="customSelect">
            <div className="selectedOption" onClick={toggleMenu}>
                {selectedOption?.label}
                <img src={ArrowIcon} alt="Arrow" className="arrowDown"/>
            </div>
            {isOpen && options.length > 1 && (
                <ClickAwayListener onClickAway={handleClickAway}>
                    <div className="customSelectMenu">
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className={
                                    option.value === selectedOption?.value
                                        ? "customSelectMenuItemSelected"
                                        : "customSelectMenuItem"
                                }
                                onClick={() => handleOptionClick(option)}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                </ClickAwayListener>
            )}
        </div>
    );
};

export default CustomSelect;
