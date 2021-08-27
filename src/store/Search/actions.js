import { CHANGE_INPUT } from './actionsTypes';

export const HandleChangeSearch = (e) => async (dispatch, getState, api) => {
  const { value } = e.target;

  dispatch({
    type: CHANGE_INPUT,
    payload: {
      value: value,
      key: value,
    },
  });
};
