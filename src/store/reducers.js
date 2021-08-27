import { combineReducers } from 'redux';
import MovieList from './MovieList/reducers';
import Search from './Search/reducers';
import DetailList from './DetailList/reducers';

const rootReducer = combineReducers({
  MovieList,
  Search,
  DetailList,
});

export default rootReducer;
