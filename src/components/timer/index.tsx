import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import TextField from '@mui/material/TextField';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import './timer.css'

type TimerProp = {
  title:string
  value: any;
  setValue: (x:any) => void
  minDateTime?: string | moment.Moment
}
export const Timer = ({title, value, setValue, minDateTime}: TimerProp) => {

  return (
      // <LocalizationProvider dateAdapter={AdapterMoment}>
      //                <StaticTimePicker
      //   displayStaticWrapperAs="mobile"
      //   value={value}
      //   onChange={(newValue) => {
      //     setValue(newValue);
      //   }}
      //   renderInput={(params) => <TextField {...params} />}
      //   toolbarTitle={title}
      // />
      // </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <StaticDateTimePicker
          label="Responsive"
          renderInput={(params) => <TextField {...params} />}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          toolbarTitle={title}
          minDateTime={minDateTime}
       />
       </LocalizationProvider>
  )
}
