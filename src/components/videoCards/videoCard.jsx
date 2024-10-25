import "./css/videoCard.css";
export const CardVideo = ({ url, name}) => {
  return (
    <a className="video__card">
        <img className="video__card__img" src={url} alt="autocad icon" />
        <p className="video__card-title">{name}</p>
    </a>
  );
};
