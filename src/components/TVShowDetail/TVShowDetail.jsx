import FiveStarRating from "../FiveStarRating/FiveStarRating";
import s from "./styles.module.css";

function TVShowDetail({ tvShow }) {
  const rating = tvShow.vote_average / 2;
  return (
    <div>
      <div className={s.title}>{tvShow.title}</div>
      <div className={s.rating_container}>
        <FiveStarRating rating={rating} />
        <span className={s.rating}>{rating}/5</span>
      </div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
}

export default TVShowDetail;
