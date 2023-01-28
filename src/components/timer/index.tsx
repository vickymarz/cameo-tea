import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import TextField from '@mui/material/TextField';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import './timer.css'

type TimerProp = {
  title:string
  value: any;
  setValue: (x:any) => void
}
export const Timer = ({title, value, setValue}: TimerProp) => {

  return (
      <LocalizationProvider dateAdapter={AdapterMoment}>
                     <StaticTimePicker
        displayStaticWrapperAs="mobile"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        toolbarTitle={title}
      />
      </LocalizationProvider>
  )
}
