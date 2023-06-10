// import shipImg from './img/search.svg';

import { useAppState } from "../../../hooks/appHook";

export const Search = () => {
  const { AppState } = useAppState();

  return (
    <article className="search ">
      <input  type="text" className={`search__text ${AppState.theme ? 'theme-light' : 'theme-dark'} `} placeholder='Найти...' />
    </article>
  );
}


