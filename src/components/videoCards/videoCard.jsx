import "./css/videoCard.css";
export const CardVideo = ({ url, title, text }) => {
  return (
    <a className="video__card">
      <img className="video__card__img" src={url} alt="video-img" />
      <div className="video__card-text">
        <p className="video__card-title">{title}</p>
        <p className="video__card-paragraph">{text}</p>
      </div>
    </a>
  );
};
