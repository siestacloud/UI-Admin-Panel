import { Link } from "react-router-dom";
import { Title } from "../title/title";
import { SwitchDisable } from "../checkbox/checkbox";
import { Btn } from "../btn/btn";
import { useAppState } from "../../../hooks/appHook";

export function Login() {



  return (
    <form className='login' action="" method="post">
      <Title title="Вход в панель управления" desc="" />
      <div className='login__text-items'>
        <input type="text" maxLength={20} autoComplete="off" className="login__text_item" placeholder="Почта" />
        <input type="text" maxLength={20} autoComplete="off" className="login__text_item" placeholder="Пароль" />
      </div>
      <SwitchDisable id="1" title="Запомнить меня" />

      <Btn style="btn-p" content="Войти" />

      <div className="login__row-links">
        <Link to={`/register`}><p className="login__reg" >Подать заявку на создание профиля</p></Link>
        <Link to={`/recover`}><p className="login__reg" >Восстановить пароль</p></Link>
      </div>
    </form>
  );
}



export function Register() {
  return (
    <form className='login' action="" method="post">
      <Title title="Создание профиля" desc="" />
      {/* <div className='login__column'> */}
      <div className='login__text-items'>
        <input type="text" maxLength={20} autoComplete="off" className="login__text_item" placeholder="Почта" />
        <input type="text" maxLength={20} autoComplete="off" className="login__text_item" placeholder="Имя" />
      </div>
      <div className='login__text-items'>
        <input type="text" maxLength={20} autoComplete="off" className="login__text_item" placeholder="Пароль" />
        <input type="text" maxLength={20} autoComplete="off" className="login__text_item" placeholder="Фамилия" />
      </div>
      <div className='login__text-items'>
        <input type="text" maxLength={20} autoComplete="off" className="login__text_item" placeholder="Повторить пароль" />
        <input type="text" maxLength={20} autoComplete="off" className="login__text_item" placeholder="Отчество" />

      </div>

      <SwitchDisable id="1" title="Я согласен с условиями обработки персональных данных." />


      <Btn style="btn-p" content="Подать заявку на создание профиля" />


      <div className="login__row-links">
        <Link to={`/login`}><p className="login__reg" >Вход в личный кабинет</p></Link>
        <Link to={`/recover`}><p className="login__reg" >Восстановить пароль</p></Link>
      </div>
    </form>
  );
}


export function Recover() {
  return (
    <form className='login' action="" method="post">
      <Title title="Восстановление пароля" desc="" />
      <div className='login__column'>
        <input type="text" maxLength={20} autoComplete="off" className="login__text_item" placeholder="Почта" />
        <input type="text" maxLength={20} autoComplete="off" className="login__text_item" placeholder="Проверочный код" />
      </div>
      <Btn style="btn-p" content="Получить код на почту" />
      <div className="login__row-links">
        <Link to={`/login`}><p className="login__reg" >Вход в личный кабинет</p></Link>
        <Link to={`/register`}><p className="login__reg" >Подать заявку на создание профиля</p></Link>
      </div>
    </form>
  );
}