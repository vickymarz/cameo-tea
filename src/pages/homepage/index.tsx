import { useState, useEffect } from 'react'
import { AverageSleepTime, Header, Timer, SleepEfficiency, Feedback } from "../../components"
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';

export const Homepage = () => {
  const [value1, setValue1] = useState(moment());
  const [value2, setValue2] = useState(moment());
  const [value3, setValue3] = useState(moment());
  const [average, setAverage] = useState(0)
  const [efficiency, setEfficiency] = useState(0)



  useEffect(() => {
    const averageSleepTime = () => {
      const wakeTime = moment(value1)
      const sleepTime = moment(value2)
      const difference = wakeTime.diff(sleepTime, 'hours')
      setAverage(difference)
    }
    averageSleepTime()

  }, [value1, value2, average])

  useEffect(() => {
    const sleepEfficiency = () => {
    const bedTime = moment(value3).hours();
     const result = (average/bedTime) * 100
      setEfficiency(result)
    }
    sleepEfficiency()

  }, [value3, average])

  return (
    <div className="min-h-full w-full bg-[#242426] px-[16px]">
        <Header />
        <div className="pt-[30px] pb-[32px]">
          <h2 className="text-[1.5rem] font-bold text-[#fff]">How well did you sleep?</h2>
          <p className="text-[1.125rem] text-[#f1f1f1]">Answer the questions as well as you can</p>
        </div>
        <Timer title='When did you go to bed?' value={value2} setValue={setValue2}/>
        <Timer title='What time did you sleep?' value={value3} setValue={setValue3}/>
        <Timer title='When did you wake up?' value={value1} setValue={setValue1}/>
        <div className='flex justify-between gap-x-[10px]'>
          <AverageSleepTime average={average}/>
          <SleepEfficiency efficiency={efficiency}/>
        </div>
        <Feedback />
    </div>
  )
}
