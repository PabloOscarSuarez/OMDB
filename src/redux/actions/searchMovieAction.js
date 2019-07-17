import { SEARCH_MOVIES, SEARCH_MOVIE, Apikey } from "./type";
import axios from "axios";

export const searchMovies = search => async dispatch => {
  const respuesta = await axios.get(
    `https://www.omdbapi.com/?apikey=${Apikey}&s=${search}`
  );

  dispatch({
    type: SEARCH_MOVIES,
    payload: respuesta.data
  });
};

export const searchMovie = id => async dispatch => {
  const respuesta = await axios.get(
    `https://www.omdbapi.com/?apikey=${Apikey}&i=${id}`
  );

  dispatch({
    type: SEARCH_MOVIE,
    payload: respuesta.data
  });
};

//http://www.omdbapi.com/?apikey=e4a7f8e9&i=tt0235679
