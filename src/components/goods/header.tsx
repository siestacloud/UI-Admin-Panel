import { Logo } from "../common/logo/logo";
import { useScroll } from "../../hooks/useScroll";
import { BurgerMenu } from "../common/burger/burger";
import { useAppState } from "../../hooks/appHook";


function Header() {

  
  const [ScrollState] = useScroll();  

  const { AppState} = useAppState();


  return (
    <header className="header">
      <div className={`header__wrapper ${ScrollState ? `scrolled  ${AppState.theme ? "theme-light-menu" : "theme-dark-menu"}` : ""}   `}>
        <Logo logo="HitShop" />
        <BurgerMenu/>
      </div>
    </header>
  );
}


export default Header;