import styles from './AddressesInputBlock.module.scss';
import { useFormik } from 'formik';
import { useCallback, useEffect, useMemo } from 'react';
import CustomSelect from '@shared/ui/CustomSelect';
import PlaceIcon from '@mui/icons-material/Place';
import { useAppSelector } from '@shared/hooks/reduxHooks';
import { useGetCitiesQuery } from '@shared/api/endpoints/catalogApi';
import { translate } from '@shared/services/LocalizationService';
import type { CustomSelectOption } from '@shared/types/CustomSelectOption';
import type { Route } from '@entities/route';
import { getErrorMessage } from '@shared/api/getErrorMessage';
import { useToast } from '@shared/hooks/useToast';
import { useUserGeolocation } from '../../lib/useUserGeolocation';
import { useAddressSuggestions } from '../../lib/useAddressSuggestions';
import AddressAutocompleteField from '@features/route-selection/ui/AddressAutocompleteField';
import WalkingTimeSlider from '@features/route-selection/ui/WalkingTimeSlider';
import type { AddressesFormValues } from '../../model/AddressesInputBlock.types';
import { BACKEND_LINK } from '@shared/config/vars';

interface Props {
  handleSubmit: (route: Route) => void;
}

function AddressesInputBlock({ handleSubmit }: Props) {
  const { showToast } = useToast();
  const localization = useAppSelector((state) => state.user.localization);
  const { data: cities = [], error: citiesError } = useGetCitiesQuery(undefined, { skip: !BACKEND_LINK });

  const translatedCities = useMemo(
    () =>
      localization.value ? cities.map((city) => ({ label: translate(`mainPage.searchField.city.${city.label}`), value: city.value })) : [],
    [cities, localization.value],
  );
  const myPositionLabel = translate('mainPage.searchField.myLocation');
  const position = useUserGeolocation(myPositionLabel);

  const formState = useFormik<AddressesFormValues>({
    initialValues: {
      city: null,
      time: 0,
      from: null,
      to: null,
      fromText: '',
      toText: '',
      fromOptions: [],
      toOptions: [],
      myPosition: null,
      agree: false,
    },
    onSubmit: (values) => {
      if (!values.city || !values.from || !values.to) return;

      handleSubmit({
        startPoint: `${values.from.latitude},${values.from.longitude}`,
        endPoint: `${values.to.latitude},${values.to.longitude}`,
        walkingTime: values.time,
        city: values.city.value,
      });
    },
  });
  const { values, setFieldValue } = formState;

  useEffect(() => {
    if (citiesError) showToast(getErrorMessage(citiesError, 'Unable to load cities'), 'error');
  }, [citiesError, showToast]);

  useEffect(() => {
    if (!position) return;

    void setFieldValue('myPosition', position);
    if (values.fromOptions.length === 0) {
      void setFieldValue('fromOptions', [position]);
    }
  }, [position, setFieldValue, values.fromOptions.length]);

  useEffect(() => {
    if (translatedCities[0] && values.city?.value !== translatedCities[0].value) {
      void setFieldValue('city', translatedCities[0]);
    }
  }, [setFieldValue, translatedCities, values.city?.value]);

  const handleFromOptionsChange = useCallback(
    (options: AddressesFormValues['fromOptions']) => {
      void setFieldValue('fromOptions', options);
    },
    [setFieldValue],
  );
  const handleToOptionsChange = useCallback(
    (options: AddressesFormValues['toOptions']) => {
      void setFieldValue('toOptions', options);
    },
    [setFieldValue],
  );

  useAddressSuggestions({
    address: values.fromText,
    city: values.city,
    ignoredAddress: myPositionLabel,
    onChange: handleFromOptionsChange,
    errorMessage: 'Unable to load departure addresses',
  });
  useAddressSuggestions({
    address: values.toText,
    city: values.city,
    onChange: handleToOptionsChange,
    errorMessage: 'Unable to load destination addresses',
  });

  return (
    <div className={styles.addressesInputBlock}>
      <form onSubmit={formState.handleSubmit} className={styles.addressInputBlockForm}>
        <div className={styles.citySelectRow}>
          <PlaceIcon sx={{ color: '#8D6EC8' }} />
          <CustomSelect
            options={translatedCities}
            selectedOption={values.city}
            handleClick={(city: CustomSelectOption) => void setFieldValue('city', city)}
          />
        </div>
        <hr className={styles.separator} />
        <span className={styles.citySelectBlock}>{translate('mainPage.searchField.title')}</span>
        <WalkingTimeSlider
          value={values.time}
          tooltip={translate('mainPage.searchField.tooltip')}
          onChange={(value) => void setFieldValue('time', value)}
        />
        <AddressAutocompleteField
          id="from"
          label={translate('mainPage.searchField.from')}
          placeholder={translate('mainPage.searchField.placeHolder')}
          value={values.from}
          inputValue={values.fromText}
          options={values.fromOptions}
          noOptionsText={translate('mainPage.searchField.noOptionText')}
          onChange={(value) => void setFieldValue('from', value)}
          onInputChange={(value) => void setFieldValue('fromText', value)}
          isOptionEqualToValue={(option, value) => option.id === value.id}
        />
        <AddressAutocompleteField
          id="to"
          label={translate('mainPage.searchField.to')}
          placeholder={translate('mainPage.searchField.placeHolder')}
          value={values.to}
          inputValue={values.toText}
          options={values.toOptions}
          noOptionsText={translate('mainPage.searchField.noOptionText')}
          onChange={(value) => void setFieldValue('to', value)}
          onInputChange={(value) => void setFieldValue('toText', value)}
          isOptionEqualToValue={(option, value) => option.label === value.label}
        />
        <label className={styles.agreeBlock}>
          <input className={styles.agreeCheckbox} type="checkbox" name="agree" checked={values.agree} onChange={formState.handleChange} />
          <span>{translate('mainPage.searchField.termOfUseAcception')}</span>
        </label>
        <button className={styles.addressesInputButton} type="submit" disabled={!values.agree || !values.from || !values.to}>
          {translate('mainPage.searchField.findRoute')}
        </button>
      </form>
    </div>
  );
}

export default AddressesInputBlock;
