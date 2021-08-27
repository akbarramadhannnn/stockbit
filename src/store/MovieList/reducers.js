import {
  CHANGE_DATA,
  CHANGE_IS_LOADING,
  CHANGE_HASH_MORE,
} from './actionsTypes';

const initialState = {
  data: [],
  isLoading: true,
  hashMore: true,
  page: 1,
};

const Reducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_DATA:
      state = {
        ...state,
        data: payload.movie,
        page: payload.page,
      };
      break;
    case CHANGE_HASH_MORE:
      state = {
        ...state,
        hashMore: payload.hashMore,
      };
      break;
    case CHANGE_IS_LOADING:
      state = {
        ...state,
        isLoading: payload.isLoading,
      };
      break;
    default:
      return state;
  }
  return state;
};

export default Reducers;
