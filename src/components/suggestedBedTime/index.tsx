import bed from '../../assets/images/bed.png'

export const SuggestedBedTime = ({timer}: {timer: string}) => {
    return (
      <div className='basis-2/4 bg-[#2e2e33] shadow-cardShadow rounded-[12px] py-[1.25rem] px-[0.5rem] flex flex-col justify-center items-center gap-y-[1rem]'>
        <div>
          <span className="flex flex-col justify-center items-center gap-y-[10px]">
            <img src={bed} alt='' />
          </span>
          <span className='text-[#fff] text-[1.125rem] font-bold'>Go to bed </span>
        </div>
        <div className='flex justify-center flex-col items-center gap-y-[0.5rem] text-[#a6ffd3]'>
          <p className='font-bold text-[1.5rem]'>{timer}</p>
        </div>
      </div>
    )
  }
