import { Filters } from "../../common/filters/filters";
import { SubMenu } from "../../common/menu/menu";
import { News } from "../../common/news/news";
import { Product, ProductMini } from "../../common/product/product";
import { Trend } from "../../common/trend/trend";


export function Category() {
  return (
    <>
      <div className="category__row ">
        <div className="category__submenu">
          <SubMenu />
          <Filters />
        </div>
        <Product />
      </div>
      <div className="category__row  m-box ">
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <ProductMini />
        <ProductMini />
      </div>
      <Trend />
    </>
  );
}



