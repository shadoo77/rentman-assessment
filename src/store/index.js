import React, { createContext, useReducer } from "react";
import rootReducers from "./reducers/root";

const RootContext = createContext();

const initialMoviesState = {
  hasFailed: false,
  isLoading: false,
  data: [],
  errorMessage: ""
};

const initCurrentMovieState = {
  hasFailed: false,
  isLoading: false,
  data: {},
  errorMessage: ""
};

const initState = {
  movies: initialMoviesState,
  currentMovie: initCurrentMovieState
};

const RootContextProvider = props => {
  const [state, dispatch] = useReducer(rootReducers, initState);
  return (
    <RootContext.Provider value={{ state, dispatch }}>
      {props.children}
    </RootContext.Provider>
  );
};

export { RootContext, RootContextProvider };
