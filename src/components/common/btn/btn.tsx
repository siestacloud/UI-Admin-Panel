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
}
export function BtnSvg({ svg, f }: propsSvg) {
  return (
    <button className="btn__btn" onClick={() => f()} data-tooltip="Menu">
      <div style={{ backgroundImage: `url(${svg})` }} className='btn__ico'  ></div>
    </button>
  );
}



