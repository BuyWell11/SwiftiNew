import styles from './CustomSelect.module.scss';
import { useState } from 'react';
import { ClickAwayListener } from '@mui/material';
import ArrowIcon from '@shared/assets/DownArrow.svg';
import { CustomSelectOption } from '@shared/types/CustomSelectOption';

interface Props {
  options: CustomSelectOption[];
  selectedOption: CustomSelectOption | null;
  handleClick: (option: CustomSelectOption) => void;
}

const CustomSelect = ({ options, selectedOption, handleClick }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: CustomSelectOption) => {
    handleClick(option);
    setIsOpen(false);
  };

  const handleClickAway = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.customSelect}>
      <div className={styles.selectedOption} onClick={toggleMenu}>
        {selectedOption?.label}
        <img src={ArrowIcon} alt="Arrow" className={styles.arrowDown} />
      </div>
      {isOpen && options.length > 1 && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className={styles.customSelectMenu}>
            {options.map((option, index) => (
              <div
                key={index}
                className={option.value === selectedOption?.value ? styles.customSelectMenuItemSelected : styles.customSelectMenuItem}
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
