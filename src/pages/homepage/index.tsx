import { useState } from 'react'
import { AverageSleepTime, Header, Timer, SleepEfficiency } from "../../components"
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

export const Homepage = () => {
  const [value1, setValue1] = useState<AdapterMoment | null>(null);
  const [value2, setValue2] = useState<AdapterMoment | null>(null);
  const [value3, setValue3] = useState<AdapterMoment | null>(null);

  return (
    <div className="min-h-full w-full bg-[#242426] px-[16px]">
        <Header />
        <div className="pt-[100px] pb-[32px]">
          <h2 className="text-[1.5rem] font-bold text-[#fff]">How well did you sleep?</h2>
          <p className="text-[1.125rem] text-[#f1f1f1]">Answer the questions as well as you can</p>
        </div>
        <Timer title='When did you wake up today?' value={value1} setValue={setValue1}/>
        <Timer title='When did you go to bed yesterday?' value={value2} setValue={setValue2}/>
        <Timer title='What time did you fall asleep yesterday?' value={value3} setValue={setValue3}/>
        <div className='flex justify-between gap-x-[10px]'>
          <AverageSleepTime />
          <SleepEfficiency />
        </div>
    </div>
  )
}
