import {useEffect, useState} from "react";
import {ClickAwayListener} from "@mui/material";
import ArrowIcon from "../img/DownArrow.svg";
import "./CustomSelect.css";
import {CustomSelectOption} from "../models/CustomSelectOption";
import {useAppSelector} from "../hooks/reduxHooks";

interface Props {
    options: CustomSelectOption[];
    handleClick: Function;
}

const CustomSelect = ({options, handleClick}: Props) => {
    const userLanguage = useAppSelector(state => state.user.localization);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    useEffect(() => {
        const foundOption = options.find(option => option.value === userLanguage);
        if (foundOption) {
            setSelectedOption(foundOption.label)
        }
    }, [options, userLanguage]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: CustomSelectOption) => {
        setSelectedOption(option.label);
        handleClick(option)
        setIsOpen(false);
    };

    const handleClickAway = () => {
        setIsOpen(false);
    };

    return (
        <div className="customSelect">
            <div className="selectedOption" onClick={toggleMenu}>
                {selectedOption}
                <img src={ArrowIcon} alt="Arrow" className="arrowDown"/>
            </div>
            {isOpen && options.length > 1 && (
                <ClickAwayListener onClickAway={handleClickAway}>
                    <div className="customSelectMenu">
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className={
                                    option.label === selectedOption
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
