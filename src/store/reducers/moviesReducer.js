import actionTypes from "../actions/actionTypes";

export default (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_LIST_MOVIES:
      return {
        ...state,
        hasFailed: false,
        isLoading: true
      };
    case actionTypes.FETCHING_LIST_MOVIES_SUCCESS:
      const newData = action.payload.map((el, i) => ({ ...el, order: i + 1 }));
      return {
        ...state,
        hasFailed: false,
        isLoading: false,
        data: newData
      };
    case actionTypes.FETCHING_LIST_MOVIES_FAILED:
      return {
        ...state,
        hasFailed: true,
        isLoading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};
