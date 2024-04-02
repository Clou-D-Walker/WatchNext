import { useEffect, useState } from "react";
import s from "./styles.module.css";
import { TVshowAPI } from "./API/tv-shows";
import Logo from "./components/Logo/Logo";
import logoImg from "./assets/images/logo.png";
import { BACKDROP_BASE_URL } from "./API/config";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import TVShowlist from "./components/TVShowList/TVShowlist";
import TVShowListItem from "./components/TVShowListItem/TVShowListItem";
import SearchBar from "./components/SearchBar/SearchBar";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTkwMjg2ODQ5ZDljNmY3MmU0NjYxMjkyZjMwMmU5NyIsInN1YiI6IjY1YTc2NzU1MDViNTQ5MDBjYmE4MDNjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fRvAP4DXHWtg4VjPSOmLNc_-l6SW1OWKF4N5WmY9k0k",
  },
};

function App() {
  const [currentTvShow, setCurrentTvShow] = useState();
  // const backurl = "https://api.themoviedb.org/3/movie/770906/images";
  const backurl = "https://image.tmdb.org/t/p/original";
  // const backurl = "https://i.ibb.co/B2ZvyNL/salaar.jpg";
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopulars() {
    try {
      const popularTvShowList = await TVshowAPI.fetchPopulars();
      if (popularTvShowList.length > 0) {
        setCurrentTvShow(popularTvShowList[0]);
      }
    } catch (error) {
      alert("Something went wrong when fetching the movies");
    }
  }
  async function fetchRecommendations(tvShowId) {
    try {
      const recommendationListResp = await TVshowAPI.fetchRecommendations(
        tvShowId
      );
      if (recommendationListResp.length > 0) {
        setRecommendationList(recommendationListResp.slice(0, 10));
      }
    } catch (error) {
      alert("Something went wrong ");
    }
  }
  async function fetchByTitle(title) {
    try {
      const searchResponse = await TVshowAPI.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setCurrentTvShow(searchResponse[0]);
      }
    } catch (error) {
      alert("Something went wrong-2");
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTvShow) {
      fetchRecommendations(currentTvShow.id);
    }
  }, [currentTvShow]);

  console.log(recommendationList);

  console.log(currentTvShow);

  function updateCurrentTvShow(tvShow) {
    setCurrentTvShow(tvShow);
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTvShow
          ? `linear-gradient( rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url("${backurl}${currentTvShow.backdrop_path}") no-repeat center center / cover`
          : "black",
      }}
      // style={{
      //   background: currentTvShow
      //     ? `url("${backurl}") no-repeat top center / cover`
      //     : "black",
      // }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <div className="logo">
              <Logo
                img={logoImg}
                title={"WatchNest"}
                subtitle="Find a show you may like"
              />
            </div>
            {/* <div>Subtitle</div> */}
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTvShow && <TVShowDetail tvShow={currentTvShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTvShow && (
          <TVShowlist
            onClickItem={updateCurrentTvShow}
            TVShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
}

export default App;
