import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://www.omdbapi.com',
});

const store = createStore(
  rootReducer,
  window.INITIAL_STATE,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);

export default store;
