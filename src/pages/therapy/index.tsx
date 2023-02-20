import { useState } from 'react'
import { SuggestedBedTime, Header, TimePicker, SleepEfficiency, Button } from "../../components"
import moment from 'moment';
import { SleepEfficiencyContextUse } from '../../context';
import { Link } from 'react-router-dom';

export const Therapy = () => {
  const {efficiency, timeSpent} = SleepEfficiencyContextUse()
  const [wakeTime, setWakeTime] = useState(moment());

  const recommendedWakeTime = () => {
    if(efficiency < 80) {
      const bedTime = moment(wakeTime).subtract(6, 'hours')
      const result = bedTime.format("H:MM A");
      console.log(bedTime, wakeTime, result)
      return result
    } else {
      const bedTime = moment(wakeTime).subtract(timeSpent, 'hour')
      const result = bedTime.format("H:MM A");
      return result
    }
  }

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
          <SuggestedBedTime timer={recommendedWakeTime()}/>
        </div>
        <div className="mt-[2.81rem]">
      <div className="flex flex-col justify-start items-start gap-y-[0.75rem] text-[#f1f1f1] leading-[1.56] text-[1rem]">
          <p>Go to bed at { recommendedWakeTime()} tonight</p>
          <p>Come back tomorrow for more</p>
        </div>
        <div className="py-[2rem] flex flex-col  gap-y-[0.75rem]">
          <Button type="button" className="bg-[#4dffb4] rounded-[1600px] px-[2rem] py-[1.25rem] text-center text-[#2e2e33] text-[1.25rem] font-bold">
            <Link to='/'>
             Go Back
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
