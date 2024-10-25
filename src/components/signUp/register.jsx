import "./css/signUp.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="main">
      <div className="main__signin">
        <div className="main__accountbuttons">
          <div className="main__accountbuttons-signup">
            <Link to="/signUp" className="main__accountbutton ">
              Вход
            </Link>
            <hr className="isSelectedSecond" />
          </div>
          <div className="main__accountbuttons-signin">
            <Link to="/register" className="main__accountbutton main__select">
              Регистрация
            </Link>
            <hr className="isSelectedFirst" />
          </div>
        </div>
        <div className="main__form">
          <p className="main__form__number-Text">
            Введите номер телефона, который хотите использовать для входа на
            платформу <br /> На него будет отправлено SMS с кодом доступа:
          </p>
          <form action="">
            <input
              className="main__form-input"
              type="number"
              placeholder="+79961800116"
            />
            <input
              className="main__form-input"
              type="password"
              placeholder="Пароль"
            />
            <label htmlFor="profesion">Выбор направления: </label>
            <select className="main__form-select" id="profesion" value={"Bim"}>
              <option value="Bim">Bim</option>
              <option value="Python">Python</option>
              <option value="1C">1C</option>
            </select>
          </form>
          <button className="main__button">
            <p>Отправить код</p>
          </button>
          <p className="main__politic-text">
            При нажатии на кнопку(и) вы соглашаетесь с
          </p>
          <a className="main__politic-link" href="#">
            политикой конфиденциальности
          </a>
        </div>
      </div>
    </div>
  );
}
export default Register;
