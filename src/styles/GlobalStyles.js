import { createGlobalStyle } from 'styled-components';
import Verdana from '../fonts/Verdana.ttf';
import VerdanaBold from '../fonts/Verdana-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 400;
    src: local('Verdana'), url(${Verdana}) format('truetype');
  }

  @font-face {
    font-family: 'Verdana Bold';
    font-style: normal;
    font-weight: 700;
    src: local('Verdana Bold'),
      url(${VerdanaBold}) format('truetype');
  }

  body {
    color: #9B9FAA;
  	background-color: #FFFF;
 		 font-family: 'Verdana';
  font-size: 14px;
  line-height: 1.2;
    width: 100%;
    height: 100%;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6, p, ul {
  margin: 0;
  padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
  font-family: inherit;
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
