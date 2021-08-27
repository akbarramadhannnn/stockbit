import { CHANGE_INPUT } from './actionsTypes';

const initialState = {
  key: 'batman',
  value: '',
};

const Reducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_INPUT:
      state = {
        ...state,
        value: payload.value,
        key: payload.key,
      };
      break;
    default:
      return state;
  }
  return state;
};

export default Reducers;
