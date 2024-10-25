import { COURSES__CARD } from "../../mock/mock";
import { CardVideo } from "../videoCards/videoCard";
import "./css/courses.css";

function CoursesMeny() {
  return (
    <div className="courses">
      <div className="courses__search-box">
        <input
          className="courses__search-input"
          type="text"
          placeholder="Search"
        />
      </div>
      <h1 className="courses__title">Курсы:</h1>
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
