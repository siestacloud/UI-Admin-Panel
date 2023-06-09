import { Btn } from "../../btn/btn";
import { RowMenu } from "../../menu/menu";
import { Title } from "../../title/title";
import girl from "./img/1.png";

export function Settings() {


  return (
    <>
      <div className="settings m-box">
        <div className="settings__row">
          <div className="settings__info">
            <Title title="Настройки пользователя" desc="" />
            <p className="settings__title">Почта:</p>
            <p className="settings__creds">siesta.cloud@gmail.com</p>
            <p className="settings__title">Пароль:</p>
            <p className="settings__creds">********</p>
            <form className='settings__form' action="" method="post">
              <input type="text" maxLength={20} autoComplete="off" className="settings__input" placeholder="Новый пароль" />
              <div className='settings__column'>
                <Btn style=" settings__btn" content="Изменить пароль" />
                <Btn style=" settings__btn btn-exit" content="Выйти из аккаунта" />
              </div>
            </form>
          </div>
          <div className="settings__img" style={{ backgroundImage: `url(${girl})` }} ></div>
        </div>
      </div>
    </>
  );
}
