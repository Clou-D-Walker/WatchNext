import TVShowListItem from "../TVShowListItem/TVShowListItem";
import s from "./styles.module.css";
import { useRef, useEffect } from "react";

function TVShowlist({ TVShowList, onClickItem }) {
  return (
    <div className={s.title}>
      <div>You'll probably like :</div>
      <div className={s.list}>
        {TVShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className={s.tv_show_item}>
              <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default TVShowlist;
