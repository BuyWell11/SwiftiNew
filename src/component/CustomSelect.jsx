import {useEffect, useState} from "react";
import {ClickAwayListener} from "@mui/material";
import ArrowIcon from "../img/DownArrow.svg";
import PropTypes from "prop-types";
import "./CustomSelect.css";
import {useSelector} from "react-redux";

const CustomSelect = ({options, handleClick}) => {
  const userLanguage = useSelector(state => state.user.localization);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const foundOption = options.find(option => option.value === userLanguage);
    if (foundOption) {
      setSelectedOption(foundOption.label)
    }
  }, [options, userLanguage]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
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
CustomSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CustomSelect;
