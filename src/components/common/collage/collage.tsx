import one from "./img/1.jpg";
import two from "./img/2.jpg";
import three from "./img/3.jpg";
import four from "./img/4.jpg";
import five from "./img/5.jpg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface props {
  show: boolean
}
export function Collage() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 6000, min: 2000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 2000, min: 1324 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1324, min: 900 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1
    }
  };



  return (
    <article className="collage" >
      <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme stickers__gallery">
        <div className="collage__item">
          <div className="collage__preview" style={{ backgroundImage: `url(${one})` }}  >
            <div className="collage__content">
              <h4>Business Startup</h4>
              <span>Design & Development</span>
            </div>
          </div>
          <h2 className="collage__item-title"> Баварская кухня </h2>
          <p className="collage__item-category"> завтрак</p>
          <div className="collage__item-row">
            <p className="collage__item-price">200руб</p>
            <p className="collage__item-sell">350руб</p>
            <p className="collage__item-purchaset">10 заказов</p>
          </div>
        </div>
        <div className="collage__item">
          <div className="collage__preview" style={{ backgroundImage: `url(${two})` }}  >
            <div className="collage__content">
              <h4>Business Startup</h4>
              <span>Design & Development</span>
            </div>
          </div>
          <h2 className="collage__item-title"> Баварская кухня </h2>
          <p className="collage__item-category"> завтрак</p>
          <div className="collage__item-row">
            <p className="collage__item-price">200руб</p>
            <p className="collage__item-sell">350руб</p>
            <p className="collage__item-purchaset">10 заказов</p>
          </div>
        </div>
        <div className="collage__item">
          <div className="collage__preview" style={{ backgroundImage: `url(${three})` }}  >
            <div className="collage__content">
              <h4>Business Startup</h4>
              <span>Design & Development</span>
            </div>
          </div>
          <h2 className="collage__item-title"> Баварская кухня </h2>
          <p className="collage__item-category"> завтрак</p>
          <div className="collage__item-row">
            <p className="collage__item-price">200руб</p>
            <p className="collage__item-sell">350руб</p>
            <p className="collage__item-purchaset">10 заказов</p>
          </div>
        </div>
        <div className="collage__item">
          <div className="collage__preview" style={{ backgroundImage: `url(${four})` }}  >
            <div className="collage__content">
              <h4>Business Startup</h4>
              <span>Design & Development</span>
            </div>
          </div>
          <h2 className="collage__item-title"> Баварская кухня </h2>
          <p className="collage__item-category"> завтрак</p>
          <div className="collage__item-row">
            <p className="collage__item-price">200руб</p>
            <p className="collage__item-sell">350руб</p>
            <p className="collage__item-purchaset">10 заказов</p>
          </div>
        </div>
        <div className="collage__item">
          <div className="collage__preview" style={{ backgroundImage: `url(${five})` }}  >
            <div className="collage__content">
              <h4>Business Startup</h4>
              <span>Design & Development</span>
            </div>
          </div>
          <h2 className="collage__item-title"> Баварская кухня </h2>
          <p className="collage__item-category"> завтрак</p>
          <div className="collage__item-row">
            <p className="collage__item-price">200руб</p>
            <p className="collage__item-sell">350руб</p>
            <p className="collage__item-purchaset">10 заказов</p>
          </div>
        </div>


      </Carousel>

    </article>
  );
}
