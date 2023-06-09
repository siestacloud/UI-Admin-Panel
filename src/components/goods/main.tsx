import { Route, Routes } from "react-router-dom";
import { General } from "../pages/general/general";
import { useAppState } from "../../hooks/appHook";


function Main() {
  let { AppState, Show } = useAppState();

  return (
    <main className='main'>
      <div className="main__wrapper">
        <Routes>
          <Route path={`/*`} element={<General />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
