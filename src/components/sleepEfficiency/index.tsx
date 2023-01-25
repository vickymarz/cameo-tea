import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const SleepEfficiency = () => {
    const percentage = 66;

    return (
      <div className='basis-2/4 bg-[#2e2e33] shadow-cardShadow rounded-[12px] py-[1.25rem] px-[0.5rem] flex flex-col justify-center items-center gap-y-[1rem]'>
        <h2 className='text-[#fff] text-[1.125rem] font-bold'>Sleep Efficiency</h2>
        <div className='flex justify-center flex-col items-center gap-y-[1rem] text-[#a6ffd3]' style={{ width: '5.62rem', height: '5.62rem'}}>
          <CircularProgressbar value={percentage} text={`${percentage}%`}   styles={buildStyles({

    strokeLinecap: 'butt',
    textSize: '1.75rem',
    pathTransitionDuration: 0.5,
    pathColor: `#a6ffd1`,
    textColor: '#a6ffd3',
    trailColor: '#2b2b2f',
  })}/>
        </div>
      </div>
    )
  }
