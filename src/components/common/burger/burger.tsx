import bag from './img/bag.svg';
import love from './img/love.svg';
import general from './img/general.svg';
import login from './img/login.svg';
import client from './img/client.svg';

import { useToggle } from "../../../hooks/useToggle";
import { Link } from 'react-router-dom';
import { useAppState } from '../../../hooks/appHook';
import { BtnSvg } from '../btn/btn';

export function BurgerMenu() {
  const [MenuState, setMenuState] = useToggle(false);
  let { ShowMenu } = useAppState()

  return (
    <article className="burger">

      <button className="burger__btn" onClick={setMenuState}>
        <span></span>
      </button>
      <div className={`burger__menu ${MenuState ? 'burger__menu-active' : ''}`}>

        {/* <Search></Search> */}
        <div className={`burger__row `}>
          <Link to={`/`}><BtnSvg f={() => { }} svg={general} tooltip={""}/></Link>
          <Link to={`/login`}><BtnSvg f={() => { }} svg={login} tooltip={""} /></Link>
        </div>
      </div>
    </article>
  )
}

