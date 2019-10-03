import {  FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions/';


const initialState = {
  comic: [],
  error: '',
  isFetching: false,
  issue: 0
};

function rootReducer(state = initialState, action) {
  console.log(rootReducer,action);
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };

    case FETCH_SUCCESS:
      return {
        state,
        comic: action.payload,
        isFetching: false,
        error: '',
        issue: action.payload.num
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
