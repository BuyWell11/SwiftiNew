import {useState} from "react";
import {ClickAwayListener} from "@mui/material";
import ArrowIcon from "../img/DownArrow.svg";
import PropTypes from "prop-types";
import "./CustomSelect.css";

const CustomSelect = ({options, handleClick}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
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
                  option === selectedOption
                    ? "customSelectMenuItemSelected"
                    : "customSelectMenuItem"
                }
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};
CustomSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CustomSelect;
