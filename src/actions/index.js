import axios from 'axios';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getComic = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get('https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json')
    .then((res) => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: FETCH_FAIL, payload: err }));
};

export const getRandomComic = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/http://xkcd.com/COMICNUMBERGOESHERE/info.0.json`
    )
    .then((res) => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: FETCH_FAIL, payload: err }));
};
