import { Btn } from "../btn/btn";
import big from "./img/big.png";

interface props {
  style: string
}

export function News() {
  return (
    <div className={`news m-box `} >
      <div className="news__desc">
        <h1>Большая скидка</h1>
        <p>Лучший выбор на 2023г</p>
        <h2>Заряд бодрости <br />на весь день</h2>
            <Btn style="" content="узнать больше"/>
      </div>
      <img className="news__img" src={big} alt="no img" />
    </div>
  );
}