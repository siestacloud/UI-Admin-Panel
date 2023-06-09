
import { Link } from "react-router-dom";
import { useAppState } from "../../../../hooks/appHook";


export function Nav() {
  let { AppState, Show } = useAppState()


  return (
    <article className="nav " >
      <div className="nav__row">

        {AppState.areaSectionList.map((areaSection, i) =>
          <Link to={`${areaSection.uri}`}>
            <button
              key={i}
              onClick={() => Show(i)}
              className={`nav__btn`}>
              <span className={`nav__txt ${areaSection.enable ? 'active' : ''}`}>{areaSection.sectionName}</span>
            </button>
          </Link>
        )}
      </div>

    </article>
  );
}



