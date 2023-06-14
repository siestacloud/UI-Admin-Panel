
export function Checkbox() {

  // const [MenuState, setMenuState] = React.useState(false)
  // const HandleEnableMenu = () => {
  // setMenuState(!MenuState)
  // }


  return (
    // Checkbox, switch
    <div className="checkbox">
      <input type="checkbox" name="check1" id="check1" />
      <label htmlFor="check1" className='checkbox__label'>Текст чекбокса</label>
    </div>

  );
}


export function Switch() {

  // const [MenuState, setMenuState] = React.useState(false)
  // const HandleEnableMenu = () => {
  // setMenuState(!MenuState)
  // }


  return (
    // Checkbox, switch
    <div className="switch">
      <input type="checkbox" name="switch1" id="switch1" />
      <label htmlFor="switch1" className='switch__label'>Текст свитча</label>
    </div>

  );
}


interface props{
  id:string
  title:string
}
export function SwitchDisable({title,id}:props) {

  // const [MenuState, setMenuState] = React.useState(false)
  // const HandleEnableMenu = () => {
  // setMenuState(!MenuState)
  // }


  return (
    // Checkbox, switch
    <div className="switch">
      <input type="checkbox" name={id} id={id} checked disabled />
      <label htmlFor={id} className='switch__label'>{title}</label>
    </div>

  );
}

