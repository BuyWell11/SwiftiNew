import { Autocomplete, TextField } from '@mui/material';
import type { AddressDTO } from '@shared/api/types/AddressDTO';
import styles from './AddressesInputBlock.module.scss';

interface Props {
  id: string;
  label: string;
  placeholder: string;
  value: AddressDTO | null;
  inputValue: string;
  options: AddressDTO[];
  noOptionsText: string;
  onChange: (value: AddressDTO | null) => void;
  onInputChange: (value: string) => void;
  isOptionEqualToValue: (option: AddressDTO, value: AddressDTO) => boolean;
}

function AddressAutocompleteField({
  id,
  label,
  placeholder,
  value,
  inputValue,
  options,
  noOptionsText,
  onChange,
  onInputChange,
  isOptionEqualToValue,
}: Props) {
  return (
    <div>
      <span className={styles.textfieldLabel}>{label}</span>
      <Autocomplete
        disablePortal
        disableListWrap
        value={value}
        inputValue={inputValue}
        id={id}
        options={options}
        filterOptions={(availableOptions) => availableOptions}
        noOptionsText={noOptionsText}
        getOptionLabel={(option) => option.label}
        isOptionEqualToValue={isOptionEqualToValue}
        sx={{ width: 300 }}
        onChange={(_event, nextValue) => onChange(nextValue)}
        onInputChange={(_event, nextValue) => onInputChange(nextValue)}
        renderInput={(params) => <TextField {...params} label={placeholder} />}
      />
    </div>
  );
}

export default AddressAutocompleteField;
