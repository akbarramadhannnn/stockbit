import styled from 'styled-components';

const MovieList = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
`;

export const Card = styled.div`
  background: #fff;
  height: 280px;
  border-radius: 4px;
`;

export const ImageWrapper = styled.div`
  height: 100%;
  border-radius: 4px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;

export default MovieList;
