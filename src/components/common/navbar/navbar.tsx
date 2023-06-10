import { BtnSvg } from '../btn/btn';
import general from './img/general.svg';
import moon from './img/moon.svg';
import sun from './img/sun.svg';
import search from './img/search.svg';
import { useAppState } from '../../../hooks/appHook';
import { Search } from '../search/search';

export function NavBar() {

  const { AppState, Theme, ShowMenu } = useAppState();

  return (
    <nav className="navbar">
      <div className={`navbar__column ${AppState.theme ? 'theme-light-menu' : 'theme-dark-menu'} `}>
        <section className='navbar__head'>
          <BtnSvg f={() => { ShowMenu(0) }} svg={general} tooltip={AppState.menuSectionList[0].sectionName} />
          <BtnSvg f={() => { ShowMenu(1) }} svg={search} tooltip={AppState.menuSectionList[1].sectionName}/>
        </section>
        <section className='navbar__botton'>
          <BtnSvg f={() => { Theme() }} svg={AppState.theme ? moon : sun} tooltip={AppState.menuSectionList[2].sectionName}/>
          <BtnSvg f={() => { ShowMenu(3) }} svg={general} tooltip={AppState.menuSectionList[3].sectionName}/>
        </section>
      </div>
      <div className={`navbar__menu ${AppState.menuSectionList[0].enable ? 'active' : ''} ${AppState.theme ? 'theme-light-menu theme-light-font' : 'theme-dark-menu theme-dark-font'} `}>menu</div>
      <div className={`navbar__menu ${AppState.menuSectionList[1].enable ? 'active' : ''} ${AppState.theme ? 'theme-light-menu theme-light-font' : 'theme-dark-menu theme-dark-font'} `}><Search></Search></div>
      <div className={`navbar__menu ${AppState.menuSectionList[3].enable ? 'active' : ''} ${AppState.theme ? 'theme-light-menu theme-light-font' : 'theme-dark-menu theme-dark-font'} `}>client area</div>

    </nav>
  );
}



