import { Link } from "react-router-dom"
import { Button } from "../button"

export const Feedback = () => {
  return (
    <div className="mt-[2.81rem]">
      <div className="flex flex-col justify-start items-start gap-y-[0.75rem] text-[#f1f1f1] leading-[1.56] text-[1.125rem]">
          <p>Your sleep quality looks very good today.</p>
          <p>Want to improve it? Find your ideal bedtime for tomorrow.</p>
        </div>
        <div className="m-2rem flex flex-col justify-center items-center gap-y-[0.75rem]">
          <Button type="button" className="bg-[#4dffb4] rounded-[1600px] px-[2rem] py-[1.25rem] text-center text-[#2e2e33] text-[1.25rem] font-bold">
            Improve Sleep
          </Button>
          <Link to='/' className="text-[#f1f1f1] text-center">
            How it works
          </Link>
        </div>
    </div>
  )
}
