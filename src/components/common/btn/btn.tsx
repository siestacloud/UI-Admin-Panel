import { useAppState } from "../../../hooks/appHook";

interface props {
  style: string
  content: string
}
export function Btn({ style, content }: props) {
  return (
    <button className={`btn ${style}`}>{content}</button>
  );
}


interface propsSvg {
  svg: string
  f: () => void
  tooltip: string
}
export function BtnSvg({ svg, f, tooltip }: propsSvg) {

  const { AppState } = useAppState();


  return (
    <button
      className={`btn__btn ${AppState.theme ? 'theme-light-hover' : 'theme-dark-hover'} `}
      onClick={() => f()}
      data-tooltip={tooltip != ''? tooltip:null}
    >
      <div style={{ backgroundImage: `url(${svg})` }} className='btn__ico'  ></div>
    </button>
  );
}



