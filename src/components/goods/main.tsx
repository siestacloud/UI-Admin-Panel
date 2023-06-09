import { Route, Routes } from "react-router-dom";
import { General } from "../pages/general/general";
import { Category } from "../pages/category/category";
import { Auth } from "../pages/auth/auth";
import { Area } from "../pages/area/area";
import { useAppState } from "../../hooks/appHook";


function Main() {
  let { AppState, Show } = useAppState();

  return (
    <main className='main'>
      <div className="main__wrapper">
        <Routes>
          <Route path={`/*`} element={<General />} />
          <Route path={`/category/product/${12345}`} element={<Category />} />
          <Route path={`/login`} element={<Auth togle={"login"} />} />
          <Route path={`/register`} element={<Auth togle={"register"} />} />
          <Route path={`/recover`} element={<Auth togle={"recover"} />} />
          {AppState.areaSectionList.map((areaSection, i) =>
            <Route path={`${areaSection.uri}`} element={<Area {...areaSection}/>} />
          )}
        </Routes>
      </div>
    </main>
  );
}

export default Main;
