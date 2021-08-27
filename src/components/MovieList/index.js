import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import MovieList, { Card, ImageWrapper } from './MovieList';
import { ReplaceToSlug } from '../../utils/replace';

const RenderMovie = memo(({ movie, isRef }) => {
  return (
    <Card ref={isRef}>
      <Link to={`/detail/${ReplaceToSlug(movie.Title)}`}>
        <ImageWrapper>
          <img src={movie.Poster} alt="Movie" />
        </ImageWrapper>
      </Link>
    </Card>
  );
});

const Index = ({ lastElementRef, data, isLoading }) => {
  return (
    <Fragment>
      <MovieList>
        {data.map((d, i) => {
          let isRef;
          if (data.length === i + 1) {
            isRef = lastElementRef;
          }
          return <RenderMovie key={i} movie={d} isRef={isRef} />;
        })}
      </MovieList>

      {isLoading && <h2>Loading...</h2>}
    </Fragment>
  );
};

export default memo(Index);
