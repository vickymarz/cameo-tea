import { useState } from 'react'
import { AverageSleepTime, Header, TimePicker, SleepEfficiency, Feedback } from "../../components"
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';

export const Homepage = () => {
  const [wakeTime, setWakeTime] = useState(moment());
//   const [average, setAverage] = useState(0)
//   const [efficiency, setEfficiency] = useState(0)

//   useEffect(() => {
//     const averageSleepTime = () => {
//       const sleepTime = moment(value2)
//       const wakeTime = moment(value3)
//       const difference = wakeTime.diff(sleepTime, 'hours')
//       setAverage(difference)
//     }
//     averageSleepTime()

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [value3])

//   useEffect(() => {
//     const sleepEfficiency = () => {
//       const bedTime = moment(value1)
//       const sleepTime = moment(value2)
//       const difference = sleepTime.diff(bedTime, 'hours')
//       const result = (average/difference) * 100
//       if(Number.isNaN(result)) {
//         setEfficiency(0)
//       } else {
//         setEfficiency(result)
//       }
//     }
//     sleepEfficiency()

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [value3, value1, value2])

  return (
    <div className="min-h-full w-full bg-[#242426] px-[16px]">
        <Header />
        <div className="pt-[30px] pb-[32px]">
          <h2 className="text-[1.5rem] font-bold text-[#fff]">Find your next ideal bed time</h2>
        </div>
        <TimePicker
          title='When do you wake up everyday?'
          value={wakeTime}
          setValue={setWakeTime}
        />
        <div className='flex justify-between gap-x-[10px]'>
          <SleepEfficiency efficiency={efficiency}/>
          
        </div>
        <Feedback />
    </div>
  )
}
