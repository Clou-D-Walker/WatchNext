import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake-data";
import { BASE_URL, API_PARAM_KEY, url, BACKDROP_BASE_URL } from "./config";

//  a990286849d9c6f72e4661292f302e97;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTkwMjg2ODQ5ZDljNmY3MmU0NjYxMjkyZjMwMmU5NyIsInN1YiI6IjY1YTc2NzU1MDViNTQ5MDBjYmE4MDNjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fRvAP4DXHWtg4VjPSOmLNc_-l6SW1OWKF4N5WmY9k0k",
  },
};
// const search_url =
//   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";
const search_url = "https://api.themoviedb.org/3/search/movie";

export class TVshowAPI {
  static async fetchPopulars() {
    // let response;
    //perform thr request and return it
    const response = await axios.get(url, options);
    console.log(response.data.results);
    return response.data.results;

    // fetch(url, options)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     response = json;
    //     console.log(json)})
    //   .catch((err) => console.error(err));
    // return FAKE_POPULARS;
  }
  static async fetchRecommendations(tvShowId) {
    // let response  perform thr request and return it
    const response = await axios.get(url, options);
    console.log(response.data.results);
    return response.data.results;

    // fetch(url, options)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     response = json;
    //     console.log(json)})
    //   .catch((err) => console.error(err));
    // return FAKE_RECOMMENDATIONS;
  }
  static async fetchByTitle(title) {
    // let response  perform thr request and return it
    const response = await axios.get(
      `${search_url}${API_PARAM_KEY}&query=${title}`,
      options
    );
    console.log(response.data.results);
    return response.data.results;

    // fetch(url, options)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     response = json;
    //     console.log(json)})
    //   .catch((err) => console.error(err));
    // return FAKE_RECOMMENDATIONS;
  }
}
