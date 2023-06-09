import DropDown from "../dropdown/dropdown";
import fran from "./img/fran.jpg";



export function Filters() {
  return (
    <div className={`filters m-box`}>
      <h2 >Фильтры</h2>
      <DropDown title="Цена"/>
      <DropDown title="Рейтинг"/>
      <DropDown title="Дата добавления"/>
    </div>
  );
}






