import { useAppState } from "../../../hooks/appHook";
import { Login, Recover, Register } from "../../common/login/login";
import bav from "./img/bav.jpg";

interface props {
  togle: string
}
export function Auth({ togle }: props) {
  

  const {AppState} = useAppState();


  return (
    <div className="auth " >
      <div className={`auth__row ${AppState.theme ? 'theme-light-menu' : 'theme-dark-sub-menu'} `}>
        {togle ==="login" ? <Login /> : <></>}
        {togle ==="register" ? <Register /> : <></>}
        {togle ==="recover" ? <Recover /> : <></>}
      </div>

    </div>
  );
}


