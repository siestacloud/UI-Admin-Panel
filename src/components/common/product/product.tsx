import { Btn, BtnSvg } from "../btn/btn";
import mainImg from "./img/1.jpg";
import one from "./img/1.jpg";
import minus from './img/minus.svg';
import plus from './img/plus.svg';
import close from './img/close.svg';




// interface props {
//   style: string
// }
export function Product() {
  return (
    <div className={`product m-box`} >
      <div className="product__row">
        <div className="product__img m-40" style={{ backgroundImage: `url(${mainImg})` }}>i</div>
        <div className="product__imgs m-15">
          <div className="product__img-min" style={{ backgroundImage: `url(${mainImg})` }}>q</div>
          <div className="product__img-min" style={{ backgroundImage: `url(${mainImg})` }}>q</div>
        </div>
        <div className="product__column   m-45 ">
          <h2 className="product__name">Баварский завтрак</h2>
          <p className="product__info"><span>Цена: </span> <span className="m-yello">199р</span></p>
          <p className="product__info"><span>Категория: </span> <span className="m-yello">завтрак</span></p>
          <p className="product__info"><span>Рейтинг: </span> <span className="m-green">10/10</span></p>
          <p className="product__desc">Lorem ipsum dolor sit amet   animi nesciunt minus consectetur adipisicing elit. Ea amet  animi nesciunt minus pariatur illo amet consectetur adipisicing  animi nesciunt minus.</p>
          <div className="product__row-btns">
            <Btn style="btn-showmore" content="в корзину" />
            <Btn style="btn-showmore" content="в избранное" />
          </div>
        </div>
      </div>
    </div>
  );
}




export const ProductMini = () => {
  return (
    <div className="pmini m-fb20">
      <div className="pmini__preview" style={{ backgroundImage: `url(${one})` }}  >

      </div>
      <h2 className="pmini-title"> Баварская кухня </h2>
      <p className="pmini-category"> завтрак</p>
      <div className="pmini-row">
        <p className="pmini-price">200руб</p>
        <p className="pmini-sell">350руб</p>
        <p className="pmini-purchaset">10 заказов</p>
      </div>
    </div>
  )
}



export const ProductInBucket = () => {
  return (
    <div className={`pbucket m-box`} >
      <div className="pbucket__row-close">
        <h2 className="pbucket__name">Баварский завтрак</h2>
        <BtnSvg f={()=>{}} svg={close} />

      </div>
      <div className="pbucket__row">
        <div className="pbucket__img m-40" style={{ backgroundImage: `url(${mainImg})` }}>i</div>
        <div className="pbucket__imgs m-15">
          <div className="pbucket__img-min" style={{ backgroundImage: `url(${mainImg})` }}>q</div>
          <div className="pbucket__img-min" style={{ backgroundImage: `url(${mainImg})` }}>q</div>
        </div>
        <div className="pbucket__column   m-45 ">
          <p className="pbucket__info"><span>Цена: </span> <span className="m-yello">199р</span></p>
          <p className="pbucket__info"><span>Категория: </span> <span className="m-yello">завтрак</span></p>
          <p className="pbucket__info"><span>Рейтинг: </span> <span className="m-green">10/10</span></p>
          <p className="pbucket__desc">Lorem ipsum dolor sit amet animi nesciunt minus consectetur adipisicing elit. Ea amet  animi nesciunt minus pariatur illo amet consectetur adipisicing  animi nesciunt minus.</p>
          <div className="pbucket__row-btns">
            <BtnSvg f={() => { }} svg={minus} />
            <p className="pbucket__counter">0</p>
            <BtnSvg f={() => { }} svg={plus} />
          </div>
        </div>
      </div>
    </div>
  )
}

