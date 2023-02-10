import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import TextField from '@mui/material/TextField';

type TimerProp = {
    title:string
    value: any;
    setValue: (x:any) => void
    error?: boolean
  }

export const TimePicker = ({title, value, setValue }: TimerProp) => {

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <StaticTimePicker
        displayStaticWrapperAs="mobile"
        label="Enter correct date and time"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        toolbarTitle={title}
        renderInput={(params) => <TextField {...params}  helperText="Kindly enter a valid time" />}
      />
    </LocalizationProvider>
  );
}
