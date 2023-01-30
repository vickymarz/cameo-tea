export const AverageSleepTime = ({average}:{average:number}) => {
  return (
    <div className='basis-2/4 bg-[#2e2e33] shadow-cardShadow rounded-[12px] py-[1.25rem] px-[0.5rem] flex flex-col justify-center items-center gap-y-[1rem]'>
      <h2 className='text-[#fff] text-[1.125rem] font-bold'>Avg. Sleep TIme</h2>
      <div className='flex justify-center flex-col items-center gap-y-[0.5rem] text-[#a6ffd3]'>
        <p className='font-bold text-[2.25rem]'>{average ? average : 0}</p>
        <span className='font-semibold text-[1.125rem]'>hour{average > 0 ? 's' : '' }</span>
      </div>
    </div>
  )
}
