import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from "../button";
import { Logo } from '../logo';

export const Header = () => {

  return (
    <>
    <header className={`w-full h-20 md:h-24 px-[16px] py-5 flex justify-between items-center z-10 `}>
      <Logo />
      <Button type='button'>
				<FontAwesomeIcon icon={faBars}  className={`text-white text-[25px]`}/>
			</Button>
    </header>
  </>
  )
}


