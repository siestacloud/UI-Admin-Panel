import { Btn } from "../../btn/btn";
import { ProductInBucket } from "../../product/product";
import { Title } from "../../title/title";

export function Bucket() {


  return (
    <div className="bucket ">
      <Title title="Корзина" desc=""></Title>
      <div className="bucket__row ">
        <ProductInBucket></ProductInBucket>
        <ProductInBucket></ProductInBucket>
        <ProductInBucket></ProductInBucket>
        <ProductInBucket></ProductInBucket>
        <ProductInBucket></ProductInBucket>
        <ProductInBucket></ProductInBucket>
      </div>
      <div className="bucket__box m-box">
        <Btn style="btn-100 btn-p" content="Оформить заказ" />
      </div>
    </div>
  );
}
