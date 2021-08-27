import { useEffect, Fragment, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetMovieList, GetSearchMovie } from '../../store/MovieList/actions';
import { HandleChangeSearch } from '../../store/Search/actions';
import MovieList from '../../components/MovieList';
import Search from '../../components/Search';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const Index = () => {
  const dispatch = useDispatch();
  const { data, isLoading, hashMore } = useSelector(
    ({ MovieList }) => MovieList
  );
  const { value } = useSelector(({ Search }) => Search);

  useEffect(() => {
    dispatch(GetMovieList());
  }, [dispatch]);

  const loadMoreData = useCallback(() => {
    dispatch(GetMovieList());
  }, [dispatch]);

  const [lastElementRef] = useInfiniteScroll(
    hashMore ? loadMoreData : () => {},
    isLoading
  );

  const searchClick = useCallback(() => {
    if (value) {
      dispatch(GetSearchMovie());
    }
  }, [value, dispatch]);

  return (
    <Fragment>
      <Search
        value={value}
        onChange={(e) => dispatch(HandleChangeSearch(e))}
        onClick={searchClick}
      />
      <MovieList
        lastElementRef={lastElementRef}
        data={data}
        isLoading={isLoading}
      />
    </Fragment>
  );
};

export default Index;
