import { Link } from "react-router-dom";
import logo from '../../assets/images/camotea.png'

export const Logo = () => {
	return (
		<Link to='/'>
			<div className="flex justify-start items-start">
              <img src={logo} alt="logo" className="w-[109px] h-[28px]"/>
			</div>
		</Link>
	);
};
