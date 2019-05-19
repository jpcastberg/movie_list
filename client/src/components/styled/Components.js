import styled, { createGlobalStyle } from 'styled-components';

/*
Colors:
light grey: #ECECEC
light brown: #EBD8CF
darker brown: #C6805A
darker red: #9F482E
dark grey: #383838
*/

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ECECEC;
  }
`;
export const H1 = styled.h1`
  color: #EBD8CF;
`;
export const StyledHeading = styled.div`
  background-color: #383838;
  height: 15%;
  display: flex;
`;
export const StyledMovieListItem = styled.div`
  background-color: #ECECEC;
  color: #9F482E;
  border: solid;
  border-width: thin;
  border-color: #383838;
  margin: 10px;
  width: 10%;
`;
