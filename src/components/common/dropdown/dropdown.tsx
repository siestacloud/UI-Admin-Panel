import { useState } from 'react';


interface props {
  title: string
}

function DropDown({title}:props) {

  const [MenuState, setMenuState] = useState(false)
  const HandleEnableMenu = () => {
    setMenuState(!MenuState)
  }


  return (
    //  2. Подсказкa слева 
    <div className="dropdown">
      <div className="dropdown__link" onClick={HandleEnableMenu} data-test="">{title}</div>   {/*  */}
      <div className={`dropdown__sublinks ${MenuState ? 'dropdown__sublinks--active' : ''}`}>
        <span className="dropdown__sublinks-item">По возрастанию</span>
        <span className="dropdown__sublinks-item">По убыванию</span>
      </div>
    </div>

  );
}

export default DropDown;
