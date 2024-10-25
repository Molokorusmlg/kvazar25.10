import "./css/signUp.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="main">
      <div className="main__signin">
        <div className="main__accountbuttons">
          <div className="main__accountbuttons-signin">
            <Link to="/signUp" className="main__accountbutton main__select">
              Вход
            </Link>
            <hr className="isSelectedFirst" />
          </div>
          <div className="main__accountbuttons-signup">
            <Link to="/register" className="main__accountbutton">
              Регистрация
            </Link>
            <hr className="isSelectedSecond" />
          </div>
        </div>
        <div className="main__form">
          <form action="">
            <input
              className="main__form-input"
              type="tel"
              pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]"
              required
              placeholder="+79961800116"
            />
            <input
              className="main__form-input"
              type="password"
              placeholder="Пароль"
            />
          </form>
          <div className="main__supportbuttons">
            <form className="main__supportbuttons-form" action="">
              <input type="checkbox" id="radioSave" />
              <label htmlFor="radioSave">Запомнить меня</label>
            </form>
            <a className="main__supportbuttons-changepassword" href="#">
              Забыли пароль?
            </a>
          </div>
          <button className="main__button">
            <p>Войти</p>
          </button>
        </div>
        <hr className="LinebetweenFooter" />
      </div>
    </div>
  );
}
export default Signup;
