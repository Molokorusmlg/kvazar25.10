import menu from "../../assets/header_img/meny.svg";
import logo from "../../assets/header_img/whiteALAbuga.png";
import ringBell from "../../assets/header_img/bell.svg";
import profile from "../../assets/header_img/profile.svg";
import arrowDown from "../../assets/header_img/arrow__frofile.svg";
import { HeaderLink } from "../headerLink/headerLink";
import "./css/header.css";
import { useParams } from "react-router-dom";

function Header() {
  const str = window.location.pathname;
  console.log(str);

  return (
    <div className="header">
      {str == "/courses/main" || str == "/programs/main" ? (
        <>
          <div className="header__menu">
            <img className="header__img-menu" src={menu} alt="meny" />
            <div className="header__logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="header__links">
            <HeaderLink text="Программы" />
            <HeaderLink text="Курсы" />
          </div>
          <div className="header__profile">
            <img
              className="header__img-ringbell"
              src={ringBell}
              alt="ringBell"
            />
            <div className="header__profileButtonBlock">
              <div className="header__profileImgBlock">
                <img
                  className="header__img-profile"
                  src={profile}
                  alt="profileLogo"
                />
              </div>
              <a
                className="profile__arrow"
                href="#
          "
              >
                <img src={arrowDown} alt="arrowClick" />
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="header__menu">
            <img className="header__img-menu" src={menu} alt="meny" />
            <div className="header__logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
