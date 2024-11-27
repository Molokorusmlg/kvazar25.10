import { COURSES__CARD } from "../../mock/mock";
import searchICO from "../../assets/header_img/searchIcon.svg";
import { CardVideo } from "../videoCards/videoCard";
import "./css/courses.css";

function CoursesMeny() {
  return (
    <div className="courses">
      <div className="courses__search-box">
        <div className="courses__search-box-search">
          <img
            className="courses__search-box-search-svg"
            src={searchICO}
            alt="иконка поиска"
          />
          <input
            className="courses__search-input"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="courses__block">
        <div className="courses__cards">
          {COURSES__CARD.map((card_video) => {
            return <CardVideo {...card_video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CoursesMeny;
