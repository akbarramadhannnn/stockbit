import {
  CHANGE_DATA,
  CHANGE_IS_LOADING,
  CHANGE_HASH_MORE,
} from './actionsTypes';

export const GetMovieList = () => async (dispatch, getState, api) => {
  dispatch({
    type: CHANGE_IS_LOADING,
    payload: {
      isLoading: true,
    },
  });

  const response = await api.get(
    `?apikey=${process.env.REACT_APP_APIKEY}&s=${getState().Search.key}&page=${
      getState().MovieList.page
    }`
  );

  if (response.data.Response === 'True') {
    dispatch({
      type: CHANGE_DATA,
      payload: {
        movie: [...getState().MovieList.data, ...response.data.Search],
        page: getState().MovieList.page + 1,
      },
    });

    dispatch({
      type: CHANGE_HASH_MORE,
      payload: {
        hashMore: response.data.Search.length > 5,
      },
    });

    dispatch({
      type: CHANGE_IS_LOADING,
      payload: {
        isLoading: false,
      },
    });
  } else {
    dispatch({
      type: CHANGE_HASH_MORE,
      payload: {
        hashMore: false,
      },
    });

    dispatch({
      type: CHANGE_IS_LOADING,
      payload: {
        isLoading: false,
      },
    });
  }
};

export const GetSearchMovie = () => async (dispatch, getState, api) => {
  dispatch({
    type: CHANGE_IS_LOADING,
    payload: {
      isLoading: true,
    },
  });

  dispatch({
    type: CHANGE_DATA,
    payload: {
      movie: [],
      page: 1,
    },
  });

  dispatch({
    type: CHANGE_HASH_MORE,
    payload: {
      hashMore: true,
    },
  });

  const response = await api.get(
    `?apikey=${process.env.REACT_APP_APIKEY}&s=${getState().Search.key}&page=1`
  );

  dispatch({
    type: CHANGE_DATA,
    payload: {
      movie: response.data.Search,
      page: 2,
    },
  });

  dispatch({
    type: CHANGE_IS_LOADING,
    payload: {
      isLoading: false,
    },
  });
};
