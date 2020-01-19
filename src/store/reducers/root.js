import moviesReducer from "./moviesReducer";

const combineReducers = reducers => {
  return (state = {}, action) => {
    const keys = Object.keys(reducers);
    const nextReducers = {};
    for (const key of keys) {
      const invoke = reducers[key](state[key], action);
      nextReducers[key] = invoke;
    }
    return nextReducers;
  };
};

const rootReducer = combineReducers({
  movies: moviesReducer
});

export default rootReducer;
