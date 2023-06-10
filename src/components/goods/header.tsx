import { Logo } from "../common/logo/logo";
import { useScroll } from "../../hooks/useScroll";
import { Search } from "../common/search/search";
import { BurgerMenu } from "../common/burger/burger";


function Header() {

  
  const [ScrollState] = useScroll();  

  return (
    <header className="header">
      <div className={`header__wrapper ${ScrollState ? "scrolled" : ""}`}>
        <Logo logo="HitShop" />
        <BurgerMenu/>
      </div>
    </header>
  );
}


export default Header;