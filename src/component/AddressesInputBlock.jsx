import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Slider,
  Stack, styled,
  TextField,
  Tooltip,
  tooltipClasses,
} from "@mui/material";
import {useFormik} from "formik";
import CustomSelect from "./CustomSelect.jsx";
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PlaceIcon from '@mui/icons-material/Place';
import "./AddressesInputBlock.css"
import {Fragment} from "react";


function AddressesInputBlock() {

  const HtmlTooltip = styled(({className, ...props}) => (
    <Tooltip {...props} classes={{popper: className}} enterTouchDelay={0}/>
  ))(({theme}) => ({
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

  let test = ['Москва', 'kek'];

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
  ]

  let fromOptions = ['grghr', 'trtwtwe']
  let toOptions = ['frggw', 'tretrr']


  const formState = useFormik({
    initialValues: {
      city: test[0],
      time: 0,
      from: null,
      to: null,
      agree: false,
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <Box className="addressesInputBlock">
      <form onSubmit={formState.handleSubmit} className="addressInputBlockForm">
        <Stack direction="row" spacing={0.5}>
          <PlaceIcon sx={{color: '#8D6EC8'}}/>
          <CustomSelect options={test} handleClick={(text) => formState.values.city = text}/>
        </Stack>
        <hr className="separator"/>
        <span className="citySelectBlock">Выбрать маршрут</span>
        <Stack direction="row" spacing={1} className="customSlider">
          <DirectionsWalkIcon className="sliderIcon"/>
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
                <span>Укажите сколько минут вы готовы идти пешком</span>
              </Fragment>
            }
          >
            <HelpOutlineIcon className="sliderIcon" sx={{color: '#8D6EC8'}}/>
          </HtmlTooltip>
        </Stack>
        <Stack direction="column" spacing={1.5} className="addressTextfieldBlock">
          <span className="textfieldLabel">Откуда</span>
          <Autocomplete
            name="from"
            disablePortal
            disableListWrap
            value={formState.values.from}
            id="from"
            options={fromOptions}
            sx={{width: 300}}
            onChange={(e, value) => {
              formState.setFieldValue('from', value)
            }}
            renderInput={(params) => <TextField {...params} label="Адрес"/>}
          />
        </Stack>
        <Stack direction="column" spacing={1.5} className="addressTextfieldBlock">
          <span className="textfieldLabel">Куда</span>
          <Autocomplete
            className="addressTextfield"
            name="to"
            disablePortal
            disableListWrap
            value={formState.values.to}
            id="to"
            options={toOptions}
            sx={{width: 300}}
            onChange={(e, value) => {
              formState.setFieldValue('to', value)
            }}
            renderInput={(params) => <TextField {...params} label="Адрес"/>}
          />
        </Stack>
        <Stack direction="row" spacing={1} className="agreeBlock">
          <Checkbox
            name="agree"
            checked={formState.values.agree}
            onChange={formState.handleChange}/>
          <span>Согласен с Пользовательским соглашением</span>
        </Stack>
        <Button variant="contained" className="addressesInputButton" type="submit"
                disabled={!formState.values.agree || !formState.values.from || !formState.values.to}>Подобрать
          маршрут</Button>
      </form>
    </Box>
  )
}

export default AddressesInputBlock;