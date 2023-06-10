// import { Route, Routes } from "react-router-dom";
import { General } from "../pages/general/general";
import { NavBar } from "../common/navbar/navbar";


function Main() {

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
