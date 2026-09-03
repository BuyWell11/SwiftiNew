import styles from './AddressesInputBlock.module.scss';
import { Autocomplete, Box, Button, Checkbox, Slider, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import CustomSelect from '@shared/ui/CustomSelect';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PlaceIcon from '@mui/icons-material/Place';
import { Fragment, useEffect, useMemo, useRef } from 'react';
//import * as Yup from 'yup';
import { useAppSelector } from '@shared/hooks/reduxHooks';
import { useGetCitiesQuery } from '@shared/api/endpoints/catalogApi';
import { translate } from '@shared/services/LocalizationService';
import { CustomSelectOption } from '@shared/types/CustomSelectOption';
import { AddressDTO } from '@shared/api/types/AddressDTO';
import { Route } from '@entities/models/Route';
import HtmlTooltip from '@shared/ui/HtmlTooltip';
import { useToast } from '@shared/hooks/useToast';
import { getErrorMessage } from '@shared/api/getErrorMessage';
import { useLazyGetYandexAddressesQuery } from '@shared/api/endpoints/addressApi';

interface Props {
  handleSubmit: (route: Route) => void;
}

function AddressesInputBlock({ handleSubmit }: Props) {
  const { showToast } = useToast();
  const [getYandexAddresses] = useLazyGetYandexAddressesQuery();
  const localization = useAppSelector((state) => state.user.localization);
  const { data: cities = [], error: citiesError } = useGetCitiesQuery();
  const locale = localization.value;

  const translatedCities = useMemo(
    () => (locale ? cities.map((city) => ({ label: translate(`mainPage.searchField.city.${city.label}`), value: city.value })) : []),
    [cities, locale],
  );

  const myPositionLabel = useMemo(() => (locale ? translate('mainPage.searchField.myLocation') : ''), [locale]);
  const fromOptionsLength = useRef(0);

  useEffect(() => {
    if (citiesError) showToast(getErrorMessage(citiesError, 'Unable to load cities'), 'error');
  }, [citiesError, showToast]);

  const marks = [
    {
      value: 0,
    },
    {
      value: 5,
    },
    {
      value: 10,
    },
  ];

  type State = {
    city: CustomSelectOption;
    time: number;
    from: AddressDTO | null;
    to: AddressDTO | null;
    fromText: string;
    toText: string;
    fromOptions: AddressDTO[];
    toOptions: AddressDTO[];
    myPosition: AddressDTO | null;
    agree: boolean;
  };

  const initialValue: State = {
    city: translatedCities[0],
    time: 0,
    from: null,
    fromText: '',
    toText: '',
    fromOptions: [],
    toOptions: [],
    to: null,
    myPosition: null,
    agree: false,
  };

  const formState = useFormik({
    initialValues: initialValue,
    onSubmit: (values) => {
      const dto: Route = {
        startPoint: `${values.from?.latitude},${values.from?.longitude}`,
        endPoint: `${values.to?.latitude},${values.to?.longitude}`,
        walkingTime: values.time,
        city: values.city.value,
      };
      handleSubmit(dto);
    },
  });
  const { values, setFieldValue } = formState;
  fromOptionsLength.current = values.fromOptions.length;

  useEffect(() => {
    const successHandler = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      const myPosition = {
        label: myPositionLabel,
        latitude: latitude,
        longitude: longitude,
        id: 0,
      };
      void setFieldValue('myPosition', myPosition);
      if (fromOptionsLength.current === 0) {
        void setFieldValue('fromOptions', [myPosition]);
      }
    };

    const errorHandler = (error: GeolocationPositionError) => {
      void error;
      showToast('Unable to access current location', 'error');
    };

    const watchId = navigator.geolocation.watchPosition(successHandler, errorHandler);

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [myPositionLabel, setFieldValue, showToast]);

  useEffect(() => {
    const address = values.fromText;
    const city = values.city;
    if (!city || address === myPositionLabel) return;
    if (address === '') {
      void setFieldValue('fromOptions', []);
      return;
    }
    const timer = window.setTimeout(() => {
      void getYandexAddresses({ address, city })
        .unwrap()
        .then((data) => {
          void setFieldValue('fromOptions', data);
        })
        .catch((error: unknown) => showToast(getErrorMessage(error, 'Unable to load departure addresses'), 'error'));
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [values.fromText, values.city, getYandexAddresses, myPositionLabel, setFieldValue, showToast]);

  useEffect(() => {
    const address = values.toText;
    const city = values.city;
    if (!city) return;
    if (address === '') {
      void setFieldValue('toOptions', []);
      return;
    }
    const timer = window.setTimeout(() => {
      void getYandexAddresses({ address, city })
        .unwrap()
        .then((data) => {
          void setFieldValue('toOptions', data);
        })
        .catch((error: unknown) => showToast(getErrorMessage(error, 'Unable to load destination addresses'), 'error'));
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [values.toText, values.city, getYandexAddresses, setFieldValue, showToast]);

  useEffect(() => {
    if (translatedCities[0]) void setFieldValue('city', translatedCities[0]);
  }, [translatedCities, setFieldValue]);

  return (
    <Box className={styles.addressesInputBlock}>
      <form onSubmit={formState.handleSubmit} className={styles.addressInputBlockForm}>
        <Stack direction="row" spacing={0.5}>
          <PlaceIcon sx={{ color: '#8D6EC8' }} />
          <CustomSelect
            options={translatedCities}
            selectedOption={formState.values.city}
            handleClick={(city: CustomSelectOption) => formState.setFieldValue('city', city)}
          />
        </Stack>
        <hr className={styles.separator} />
        <span className={styles.citySelectBlock}>{translate('mainPage.searchField.title')}</span>
        <Stack direction="row" spacing={1} className={styles.customSlider}>
          <DirectionsWalkIcon sx={{ color: '#2D2D2D' }} />
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
                <span>{translate('mainPage.searchField.tooltip')}</span>
              </Fragment>
            }
          >
            <HelpOutlineIcon className={styles.sliderIcon} sx={{ color: '#8D6EC8' }} />
          </HtmlTooltip>
        </Stack>
        <Stack direction="column" spacing={1.5} className={styles.addressTextfieldBlock}>
          <span className={styles.textfieldLabel}>{translate('mainPage.searchField.from')}</span>
          <Autocomplete
            className={styles.addressTextfield}
            disablePortal
            disableListWrap
            value={formState.values.from}
            inputValue={formState.values.fromText}
            id="from"
            options={formState.values.fromOptions}
            filterOptions={(options) => options}
            noOptionsText={translate('mainPage.searchField.noOptionText')}
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            sx={{ width: 300 }}
            onChange={(e, value) => {
              formState.setFieldValue('from', value);
            }}
            onInputChange={(event, value) => formState.setFieldValue('fromText', value)}
            renderInput={(params) => <TextField {...params} label={translate('mainPage.searchField.placeHolder')} />}
          />
        </Stack>
        <Stack direction="column" spacing={1.5} className={styles.addressTextfieldBlock}>
          <span className={styles.textfieldLabel}>{translate('mainPage.searchField.to')}</span>
          <Autocomplete
            className={styles.addressTextfield}
            disablePortal
            disableListWrap
            value={formState.values.to}
            inputValue={formState.values.toText}
            id="to"
            options={formState.values.toOptions}
            filterOptions={(options) => options}
            noOptionsText={translate('mainPage.searchField.noOptionText')}
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) => option.label === value.label}
            sx={{ width: 300 }}
            onChange={(e, value) => {
              formState.setFieldValue('to', value);
            }}
            onInputChange={(event, value) => formState.setFieldValue('toText', value)}
            renderInput={(params) => <TextField {...params} label={translate('mainPage.searchField.placeHolder')} />}
          />
        </Stack>
        <Stack direction="row" spacing={1} className={styles.agreeBlock}>
          <Checkbox name="agree" checked={formState.values.agree} onChange={formState.handleChange} />
          <span>{translate('mainPage.searchField.termOfUseAcception')}</span>
        </Stack>
        <Button
          variant="contained"
          className={styles.addressesInputButton}
          type="submit"
          disabled={!formState.values.agree || !formState.values.from || !formState.values.to}
        >
          {translate('mainPage.searchField.findRoute')}
        </Button>
      </form>
    </Box>
  );
}

export default AddressesInputBlock;
