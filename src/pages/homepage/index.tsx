import { useState, useEffect } from 'react'
import { AverageSleepTime, Header, DateTimer, SleepEfficiency, Button } from "../../components"
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import { SleepEfficiencyContextUse } from '../../context';
import { Link } from 'react-router-dom';

export const Homepage = () => {
  const {efficiency, setEfficiency, setTimeSpent} = SleepEfficiencyContextUse()
  const [value1, setValue1] = useState(moment());
  const [value2, setValue2] = useState(moment());
  const [value3, setValue3] = useState(moment());
  const [average, setAverage] = useState(0)


  useEffect(() => {
    const averageSleepTime = () => {
      const sleepTime = moment(value2)
      const wakeTime = moment(value3)
      const difference = wakeTime.diff(sleepTime, 'hours')
      setAverage(difference)
    }
    averageSleepTime()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value3, value2])

  useEffect(() => {
    const sleepEfficiency = () => {
      const bedTime = moment(value1)
      const wakeTime = moment(value3)
      const difference = wakeTime.diff(bedTime, 'hours')
      console.log(difference)
      setTimeSpent(difference)
      const division = (average/difference)
      const result = division * 100
      console.log(average/difference, result)
      if(Number.isNaN(result)) {
        setEfficiency(0)
      } else {
        setEfficiency(result)
      }
    }
    sleepEfficiency()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value3, value1, average, efficiency])

  return (
    <div className="min-h-full w-full bg-[#242426] px-[16px]">
        <Header />
        <div className="pt-[30px] pb-[32px]">
          <h2 className="text-[1.5rem] font-bold text-[#fff]">How well did you sleep?</h2>
          <p className="text-[1.125rem] text-[#f1f1f1]">Answer the questions as well as you can</p>
        </div>
        <DateTimer
          title='When did you go to bed?'
          value={value1}
          setValue={setValue1}
        />
        <DateTimer
          title='What time did you sleep?'
          value={value2}
          setValue={setValue2}
          minDateTime={value1}
        />
        <DateTimer
          title='When did you wake up?'
          value={value3}
          setValue={setValue3}
          minDateTime={value1}
        />
        <div className='flex justify-between gap-x-[10px]'>
          <AverageSleepTime average={average}/>
          <SleepEfficiency efficiency={efficiency}/>
        </div>
        <div className="mt-[2.81rem]">
          <div className="flex flex-col justify-start items-start gap-y-[0.75rem] text-[#f1f1f1] leading-[1.56] text-[1.125rem]">
            <p>Your sleep quality looks very good today.</p>
            <p>Want to improve it? Find your ideal bedtime for tomorrow.</p>
          </div>
          <div className="py-[2rem] flex flex-col  gap-y-[0.75rem]">
            <Button type="button" className="bg-[#4dffb4] rounded-[1600px] px-[2rem] py-[1.25rem] text-center text-[#2e2e33] text-[1.25rem] font-bold">
              <Link to='./therapy'>
                Improve Sleep
              </Link>
            </Button>
            <Link to='/' className="text-[#f1f1f1] text-center decoration-solid decoration-[#f1f1f1]">
              How it works
            </Link>
        </div>
    </div>
    </div>
  )
}
