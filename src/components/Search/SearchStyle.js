import styled from 'styled-components';

const Search = styled.div`
  margin-bottom: 30px;
  height: 40px;
  box-sizing: border-box;
  display: flex;

  button {
    height: 100%;
    padding: 0px 30px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #c0c0c0;
  outline: none;
  background: #fff;
  border-radius: 8px;
  padding: 13px 13px;
  letter-spacing: 1px;

  &::placeholder {
    color: #c0c0c0;
  }
`;

export default Search;
