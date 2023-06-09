import { ProductInBucket } from "../../product/product";
import { Title } from "../../title/title";

export function Favorite() {

  return (
    <div className="favorite ">
      <div className="favorite__row">
        <Title title="Избранные товары" desc=""></Title>
        <ProductInBucket></ProductInBucket>
        <ProductInBucket></ProductInBucket>
      </div>
    </div>
  );
}
