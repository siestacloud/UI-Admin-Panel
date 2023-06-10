import { BtnSvg } from '../btn/btn';
import general from './img/general.svg';
import search from './img/search.svg';

export function NavBar() {
  return (
    <nav className="navbar">
      <div className='navbar__column'>
        <section className='navbar__head'>
          <BtnSvg f={() => { }} svg={general} />
          <BtnSvg f={() => { }} svg={search} />
        </section>
        <section className='navbar__botton'>
          <BtnSvg f={() => { }} svg={general} />
          <BtnSvg f={() => { }} svg={general} />
        </section>
      </div>
    </nav>
  );
}



