import axios from "axios";
import { apiURI } from "../../services/config";
import actionTypes from "./actionTypes";

export const fetching_init = () => {
  return {
    type: actionTypes.FETCHING_LIST_MOVIES
  };
};

export const fetching_success = results => {
  return {
    type: actionTypes.FETCHING_LIST_MOVIES_SUCCESS,
    payload: results
  };
};

export const fetching_fail = err => {
  return {
    type: actionTypes.FETCHING_LIST_MOVIES_FAILED,
    error: err
  };
};

export const fetchListMovies = async (dispatch, searchQuery) => {
  dispatch(fetching_init());
  try {
    const results = await axios.get(`${apiURI}s=${searchQuery}`);
    results.data.Response === "True"
      ? dispatch(fetching_success(results.data.Search))
      : dispatch(fetching_fail(results.data.Error));
  } catch (err) {
    dispatch(fetching_fail(err));
  }
};
