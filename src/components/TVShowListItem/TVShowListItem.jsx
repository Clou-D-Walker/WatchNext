import s from "./styles.module.css";
import { SMALL_IMG_COVER } from "../../API/config";

const maxTitleChar = 30;
function TVShowListItem({ tvShow, onClick }) {
  const onClick_ = () => {
    onClick(tvShow);
  };
  return (
    <div className={s.container} onClick={onClick_}>
      <img
        src={SMALL_IMG_COVER + tvShow.backdrop_path}
        alt={tvShow.name}
        className={s.img}
      />
      <div className={s.title}>
        {tvShow.title.length > maxTitleChar
          ? tvShow.title.slice(0, maxTitleChar) + "..."
          : tvShow.title}
      </div>
    </div>
  );
}

export default TVShowListItem;
