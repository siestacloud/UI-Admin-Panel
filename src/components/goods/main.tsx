import { Route, Routes } from "react-router-dom";
import { General } from "../pages/general/general";
import { useAppState } from "../../hooks/appHook";
import { NavBar } from "../common/navbar/navbar";


function Main() {
  let { AppState, Show } = useAppState();

  return (
    <main className='main'>
      <div className="main__wrapper">
        <NavBar />
        <General />
      </div>
    </main>
  );
}

export default Main;
