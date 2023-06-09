import { Login, Recover, Register } from "../../common/login/login";
import bav from "./img/bav.jpg";

interface props {
  togle: string
}
export function Auth({ togle }: props) {
  return (
    <div className="auth m-box" >
      <div className="auth__row">
        {togle ==="login" ? <Login /> : <></>}
        {togle ==="register" ? <Register /> : <></>}
        {togle ==="recover" ? <Recover /> : <></>}
        <div className="auth__img" style={{ backgroundImage: `url(${bav})` }} ></div>
      </div>

    </div>
  );
}


